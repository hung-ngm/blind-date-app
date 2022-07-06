import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavigationButtons from '../profile/components/NavigationButtons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { mainTheme } from '../../themes/mainTheme'
import PrimaryButton from '../../common/PrimaryButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../types/navigation'

type EnableNotiScreenNavigationProps = NativeStackScreenProps<
  AppStackParamList,
  'EnableNoti'
>
const EnableNotiScreen = ({ navigation }: EnableNotiScreenNavigationProps) => {
  const handlePress = () => {
    // Turn on noti
    // navigation.navigate('')
  }
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1,
      }}>
        <NavigationButtons rightComponent={<Text>Skip</Text>}/>
      </View>
      <View style={{
        flex: 5,
        alignItems: 'center',
      }}>
        <View>
          <Icon name='message' size={200} color={mainTheme.PRIMARY_COLOR}/>
        </View>
        <View style={{
            flex: 2,
            ...styles.item,
            ...styles.titleContainer
        }}
        >
            <Text style={styles.title}>Enable notification</Text>
              <Text style={styles.description}>
                Get push-notification when you get the match or receive a message.
              </Text>
        </View>
        <View style={{
                    flex: 1,
                    marginTop: 20,
        }}>
          <PrimaryButton
            text='I want to be notified'
            textColor={mainTheme.WHITE_COLOR}
            onPress={handlePress}
          />
        </View>
      </View>
    </View>
  )
}

export default EnableNotiScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  item: {
    padding: 10,
  },
  titleContainer: {
    padding: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 34,
    padding: 5,
  },
  description: {
    fontSize: 18,
    padding: 5,
  },
})
