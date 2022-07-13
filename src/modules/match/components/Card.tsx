import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
} from 'react-native';
import { Profile } from '../../../types/profile';

interface CardProps {
  card: Profile;
}

const Card: React.FC<CardProps> = ({card}) => {
  const { displayName, age, job, photoURL, promptStart, promptEnd } = card;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: photoURL }} 
          resizeMode="cover"
          style={styles.image}
          blurRadius={30}
        />
        <View style={styles.footer}>
            <Text style={styles.name}>{displayName}</Text>
            <Text style={styles.name}> {age}</Text>
        </View>
      </View>
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    position: 'relative',
    width: 150,
    height: 200,
    //marginLeft: 35,
    //marginRight: 35,
    borderRadius: 20,
    margin: '2%',
    
  },
  imageContainer: {
    paddingTop: 160,    
    paddingBottom: 0,
    paddingLeft: 10,
  },

  image: {
    width: 150,
    height: 200,
    paddingBottom: 0,
    marginBottom: 0,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  },
  footer: {
    flexDirection: "row",
  },
  name: {
    color: "white",
    fontSize: 15,
  }
})