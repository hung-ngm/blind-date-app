import { Place } from '../../types/place';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  doc,
  setDoc,
  addDoc,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
  DocumentData,
  serverTimestamp,
  FieldValue,
  onSnapshot,
  query,
  collection,
  orderBy,
  limit,
  startAfter,
  Unsubscribe
} from '@firebase/firestore';
import { db } from '../utils/firebase';
import { store } from './store';

class PlaceStore {
    currentPlace: Place | null = null;
    placeLoading = true;
    unsubscribePlace?: Unsubscribe;

    constructor() {
        makeAutoObservable(this);
    }

    loadPlace = async (matchId: string) => {
        try {
            this.placeLoading = true;
            this.unsubscribePlace && this.unsubscribePlace();

            this.unsubscribePlace = onSnapshot(
                query(
                    collection(db, 'matches', matchId, 'places'),
                    limit(1),
                ),
                this.setPlace,
            );
        } catch (error) {
            console.log(error);
        }
    }

    resetStore = () => {
        this.currentPlace = null;
        this.placeLoading = true;

        if (this.unsubscribePlace) {
            this.unsubscribePlace();
            this.unsubscribePlace = undefined;
        }
    }

    setPlace = (snap: QuerySnapshot<DocumentData>) => {
       if (!snap.empty) {
           this.currentPlace = this.getPlace(snap.docs[0]);
       }
    }

    createPlace = async (place: Place) => {
        const { currentMatch } = store.matchStore;
        const { user } = store.userStore;
        if (!place || !currentMatch || !user) return;
        const matchRef = doc(db, 'matches', currentMatch.id);

        await addDoc(
            collection(matchRef, 'places'),
            {
                id: place.id,
                invitedBy: user.uid,
                name: place.name,
                photoUrl: place.photoUrl,
                categories: place.categories,
                priceLevel: place.priceLevel,
                address: place.address,
                city: place.city,
                country: place.country,
                phoneNumber: place.phoneNumber,
            }
        )

        runInAction(() => {
            this.placeLoading = false;
        });
    }

    getPlace = (snap: QueryDocumentSnapshot<DocumentData>): Place => {
        return {
            id: snap.id,
            invitedBy: snap.data().invitedBy,
            name: snap.data().name,
            photoUrl: snap.data().photoUrl,
            categories: snap.data().categories,
            priceLevel: snap.data().priceLevel,
            address: snap.data().address,
            city: snap.data().city,
            country: snap.data().country,
            phoneNumber: snap.data().phoneNumber,
        }
    }
}

export default PlaceStore;