import { observer } from 'mobx-react-lite';
import React from 'react'
import { PassionType } from '../../../types/profile';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import { useStore } from '../../stores/store';
import PassionSelector from './components/PassionSelector';

const EditPassionScreen = () => {
  const { setPassions } = useStore().profileStore;
  const navigation = useAppNavigation();
  const handleContinuePress = (passions: PassionType[]) => {
    setPassions(passions);
    navigation.navigate("ProfileEditMain");
  }

  return (
      <PassionSelector handleContinuePress={handleContinuePress}/>
  )
}

export default observer(EditPassionScreen);