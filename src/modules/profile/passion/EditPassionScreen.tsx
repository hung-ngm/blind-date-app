import React from 'react'
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import PassionSelector from './components/PassionSelector';

const EditPassionScreen = () => {
  const navigation = useAppNavigation();
  const handleContinuePress = () => {
    navigation.navigate("ProfileEditMain");
  }

  return (
      <PassionSelector handleContinuePress={handleContinuePress}/>
  )
}

export default EditPassionScreen