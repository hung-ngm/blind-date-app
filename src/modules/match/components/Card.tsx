import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
} from 'react-native';
import { Profile } from '../../../types/profile';
import { Match } from '../../../types/match';
import { mainTheme } from '../../../themes/mainTheme';
import { useStore } from '../../stores/store';

interface CardProps {
  card: Match;
}

const Card: React.FC<CardProps> = ({card}) => {
  const { users, userMatched } = card;
  const { user } = useStore().userStore;
  const otherUser = users[userMatched.find((id) => id !== user?.uid) as string] as Profile;
  const { photoUrl, firstName, age } = otherUser;

  return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: photoUrl }} 
          resizeMode="cover"
          style={styles.image}
          blurRadius={20}
        />
        <View style={styles.footer}>
            <Text style={styles.name}>{firstName}, {age}</Text>
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