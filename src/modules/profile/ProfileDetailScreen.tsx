import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../common/PrimaryButton';
import NavigatorButtonGroup from './components/NavigatorButtonGroup';
import { mainTheme } from '../../themes/mainTheme';
import { FloatingLabelInput } from 'react-native-floating-label-input';

function ProfileDetailScreen() {
  const handleConfirmPress = () => {

  }
  return (
    <View style={styles.container}>
      <View style={{
        flex: 1
      }}>
        <NavigatorButtonGroup />
      </View>
      <View style={{
          flex: 1
        }}
      >
        <Text>Profile Details</Text>
      </View>
      <View style={{
        ...styles.formContainer,
        flex: 5
      }}>
        <View style={{
          flex: 1
        }}>
          <Text>Avatar</Text>
        </View>
        <View style={{
          flex: 2
        }}>
          <View style={{
            flex: 1,
          }}>
            <View style={styles.textInputContainer}>
              <FloatingLabelInput
                label={'First name'}
              />
            </View>
          </View>
          <View style={{
            flex: 1
          }}>
            <View style={styles.textInputContainer}>
              <FloatingLabelInput
                label={'Last name'}  
              />
            </View>
          </View>
          <View style={{
            flex: 1
          }}>
            <Text>Birthday</Text>
          </View>
        </View>
        <View style={{
          flex: 1
        }}>
          <PrimaryButton text='Confirm' textColor={mainTheme.WHITE_COLOR} onPress={handleConfirmPress}/>
        </View>
      </View>
    </View>
  )
}

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: 300,
    height: 50,
  },
  textInputInput: {
    color: 'red',
  }
})