import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View ,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image
} from 'react-native';
import { Place } from '../../../../types/place';
import { Profile } from '../../../../types/profile';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { mainTheme } from '../../../../themes/mainTheme';
import ProfileAvatar from '../../shared/components/ProfileAvatar';
import { useStore } from '../../../stores/store';
import useAppNavigation from '../../../navigation/hooks/useAppNavigation';

interface PlaceItemProps {
    place: Place;
    isSender: boolean;
    otherUser: Profile;
}

const PlaceItem: React.FC<PlaceItemProps> = ({ place, isSender, otherUser }) => {
    const { name, photoUrl } = place;
    const [checked, setChecked] = useState(false);
    const navigation = useAppNavigation();
    const { setMatchCanChat } = useStore().matchStore;

    const handlePlaceChoose = () => {
        setChecked(true);
        setMatchCanChat();
    }

    const handlePlaceFullViewBackButtonPressed = () => {
        navigation.navigate('ChatMessages');
    }

    const handlePlacePressed = () => {
        navigation.navigate('PlaceFullView', 
        { 
            place: place,
            onBackButtonPressed: handlePlaceFullViewBackButtonPressed 
        })
    }
    
    return (
        <View style={[styles.container, isSender ? styles.sender: styles.receiver]}>
            {!isSender && 
                <ProfileAvatar 
                    imageUrl={otherUser.photoUrl}
                    width={48}
                    height={48}
                    borderRadius={24}
                    isBlurred={true}
                    extraProps={{
                        top: 0,
                        left: -56,
                        position: "absolute", 
                    }}
                />
            }
            <TouchableWithoutFeedback onPress={handlePlacePressed}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: photoUrl }} 
                        resizeMode="cover"
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.placeName}>{name}</Text>
                    </View>
                    {!isSender && (
                        <TouchableOpacity 
                            style={checked? styles.close: styles.heart}
                            onPress={() => handlePlaceChoose()}
                        >
                        {
                            checked? 
                            <MaterialIcons name="close" size={26} color={mainTheme.WHITE_COLOR} />
                            : <AntDesign name="heart" size={26} color={mainTheme.WHITE_COLOR} />
                        }
                        </TouchableOpacity>
                    )}
                    
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default PlaceItem;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginHorizontal: 12,
        marginVertical: 8,
        alignSelf: "flex-start",
    },
    sender: {
        borderTopRightRadius: 0,
        marginLeft: "auto",
    },
    receiver: {
        position: "relative",
        borderTopLeftRadius: 0,
        marginLeft: 56,
    },
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