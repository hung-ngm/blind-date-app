import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
} from 'react-native';
import { Profile } from '../../../types/profile';


const Card = () => {
  // const { displayName, age, job, photoURL, prompt } = card;

  const image = { uri: "http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg" };

  return (
    <View style={styles.container}>
      <View style={styles.personalDetailsContainer}>
        <View style={styles.personalDetails}>
          <Text style={styles.nameAge}>Kylie 17</Text>
          <Text style={styles.job}>Model</Text>
        </View>
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          source={image} 
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <View style={styles.promptContainer}>
        <Text style={styles.promptStart}>My simple pleasure is</Text>
        <Text style={styles.promptEnd}>buscus</Text>
      </View>
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  imageContainer: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  personalDetailsContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 5,
  },
  personalDetails: {
    marginLeft: 10,
    marginTop: 5,
  },
  nameAge: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  job: {
    fontSize: 15,
  },

  image: {
    width: 300,
    height: 300,
    paddingBottom: 0,
    marginBottom: 0,
  },
  promptContainer: {
    paddingTop: 0,
    marginTop: 0,
    height: 65,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  promptStart: {
    paddingTop: 5,
    fontSize: 10,
  },
  promptEnd: {
    fontSize: 30,
  }
})