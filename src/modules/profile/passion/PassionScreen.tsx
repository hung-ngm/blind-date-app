import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { mainTheme } from '../../../themes/mainTheme'
import PrimaryButton from '../../../common/PrimaryButton'
import PassionList from './components/PassionList'
import { ProfileContext } from '../context/ProfileProvider'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'

const PassionScreen = () => {
  const navigation = useProfileNavigation();
  const handleContinuePress = () => {
    navigation.navigate('IdealPlace');
  }

  const {
    numSelectedPassions,
  } = useContext(ProfileContext)
  const isContinueButtonDisabled = numSelectedPassions === 0;
  return (
        <View style={styles.container}>
            <View style={styles.titleContainer}
            >
                <Text style={styles.title}>Your passions</Text>
                  <Text style={styles.description}>
                    Select a few of your interests and let everyone know what you're passionate about.
                  </Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={{ flex: 3 }}>
                    <PassionList/>
                </View>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                }}>
                    <PrimaryButton
                      text='Continue'
                      onPress={handleContinuePress}
                      extraTouchableHighlightProps={{
                        disabled: isContinueButtonDisabled
                      }}
                      extraStyles={isContinueButtonDisabled ? {
                        opacity: '0.5'
                      } : {}}
                    />
                </View>
            </View>
        </View>
  )
}

export default PassionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    fontSize: 34,
    padding: 5,
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: 50,
    marginBottom: 30,
  },
  description: {
    fontSize: 18,
    padding: 5,
  },
  detailContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
  },
  buttonSelected: {
      backgroundColor: mainTheme.PRIMARY_COLOR,
  },
  buttonDefault: {
      backgroundColor: mainTheme.WHITE_COLOR,
  },
  textSelected: {
      color: mainTheme.WHITE_COLOR,
  },
  textDefault: {
      color: mainTheme.DARK_COLOR,
  }
})