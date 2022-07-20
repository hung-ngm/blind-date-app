import React from 'react'
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'
import PassionSelector from './components/PassionSelector'

const PassionScreen = () => {
  const navigation = useProfileNavigation();
  const handleContinuePress = () => {
    navigation.navigate("IdealPlace");
  }

  return (
      <PassionSelector handleContinuePress={handleContinuePress}/>
  )
}

export default PassionScreen
