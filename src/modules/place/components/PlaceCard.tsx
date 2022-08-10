import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { Place } from '../../../types/place';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { mainTheme } from '../../../themes/mainTheme';
import { useStore } from '../../stores/store';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';

interface PlaceCardProps {
  placeCard: Place;
  onPress: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ placeCard, onPress }) => {
  const { name, photoUrl } = placeCard;
  const [checked, setChecked] = useState(false);
  const { createPlace } = useStore().placeStore;
  const { currentMatch, selectMatch } = useStore().matchStore;
  const navigation = useAppNavigation();

  const handlePlacePressed = async () => {
    setChecked(true);
    try {
      await createPlace(placeCard);
      if (currentMatch) {
        selectMatch(currentMatch.id).then((res) => {
          if (res) {
            navigation.navigate('ChatMessages');
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: photoUrl }} 
          resizeMode="cover"
          style={styles.image}
        />
        <View>
          <Text style={styles.placeName}>{name}</Text>
        </View>
        <TouchableOpacity 
          style={checked? styles.close: styles.heart}
          onPress={() => handlePlacePressed()}
        >
          {
            checked? 
            <MaterialIcons name="close" size={26} color={mainTheme.WHITE_COLOR} />
            : <AntDesign name="heart" size={26} color={mainTheme.WHITE_COLOR} />
          }
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PlaceCard;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "column",
    justifyContent: 'flex-end',
    position: 'relative',
    width: 150,
    height: 200,
    margin: '1.5%',
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 14,
  },
  heart: {
    height: 50,
    borderTopWidth: 1,
    borderColor: mainTheme.WHITE_COLOR,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: "center"
  },
  close: {
    height: 50,
    backgroundColor: mainTheme.PRIMARY_COLOR,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: "center"
  },
  placeName: {
    color: mainTheme.WHITE_COLOR,
    fontSize: 15,
    flexDirection: "row",
    padding: 10,
  }
})