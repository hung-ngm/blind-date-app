import React, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TouchableOpacity
} from 'react-native';
import { Place } from '../../../types/place';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { mainTheme } from '../../../themes/mainTheme';

interface PlaceCardProps {
  placeCard: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({placeCard}) => {
  const { city, country, photoUrl } = placeCard;
  const [checked, setChecked] = useState(false);

  return (
    //<View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: photoUrl }} 
          resizeMode="cover"
          style={styles.image}
        />
        <View>
          <Text style={styles.placeName}>{city}, {country}</Text>
        </View>
        <TouchableOpacity 
          style={checked? styles.close: styles.heart}
          onPress={() => setChecked(!checked)}
        >
          {
            checked? <MaterialIcons name="close" size={26} color={mainTheme.WHITE_COLOR} />
            : <AntDesign name="heart" size={26} color={mainTheme.WHITE_COLOR} />
          }
        </TouchableOpacity>
      </View>
    //</View>
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