import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
} from 'react-native';
import { Profile } from '../../../types/profile';
import { mainTheme } from '../../../themes/mainTheme';

interface CardProps {
  card: Profile;
}

const Card: React.FC<CardProps> = ({card}) => {
  const { firstName, age, photoUrl } = card;

  return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: photoUrl }} 
          resizeMode="cover"
          style={styles.image}
          blurRadius={20}
        />
        <View style={styles.footer}>
            <Text style={styles.name}>{firstName}, {age} </Text>
        </View>
      </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: 160,  
    paddingLeft: 10,
    position: 'relative',
    width: 150,
    height: 200,
    margin: '2%',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
  },
  name: {
    color: mainTheme.WHITE_COLOR,
    fontSize: 15,
  }
})