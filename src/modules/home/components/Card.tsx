import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Profile } from '../../../types/profile'
import { mainTheme } from '../../../themes/mainTheme'
import DetailsIcon from '../../../common/DetailsIcon';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';

interface CardProps {
  card: Profile
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { firstName, age, job, photoUrl, prompt, promptAnswer } = card
  const navigation = useAppNavigation();
  const handleDetailsIconPressed = () => {
    navigation.navigate('ProfileFullView');
  }
  return (
    <View style={styles.container}>
      <View style={styles.personalDetailsContainer}>
        <View style={styles.personalDetails}>
          <View style={styles.firstRow}>
            <Text style={styles.nameAge}>
              {firstName} {age}
            </Text>
            <DetailsIcon
              width={20}
              height={20}
              borderRadius={10}
              buttonExtraProps={{
                marginLeft: 180,
                marginTop: 2,
              }}
              textExtraProps={{
                paddingTop: 1,
              }}
              onPress={handleDetailsIconPressed}
            />
          </View>
          <View style={styles.secondRow}></View>
          
          
          <Text style={styles.job}>{job}</Text>
        </View>
        <View>
          
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: photoUrl }}
          resizeMode="cover"
          style={styles.image}
          blurRadius={30}
        />
      </View>
      
      <View style={styles.promptContainer}>
        <Text style={styles.promptStart}>{prompt}</Text>  
        <Text style={styles.promptEnd}>{promptAnswer}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: mainTheme.WHITE_COLOR,
    position: 'relative',
    width: 300,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 10,
  },
  imageContainer: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 5,
    borderWidth: 1,
  },
  personalDetailsContainer: {
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  firstRow: {
    flexDirection: 'row',
  },
  secondRow: {
    flexDirection: 'row',
  },
  job: {
    fontSize: 15,
  },
  image: {
    width: 300,
    height: 310,
    paddingBottom: 0,
    marginBottom: 0,
  },
  promptContainer: {
    paddingTop: 0,
    marginTop: 0,
    height: 65,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 10,
  },
  promptStart: {
    paddingTop: 5,
    fontSize: 10,
  },
  promptEnd: {
    fontSize: 30,
  },
})
