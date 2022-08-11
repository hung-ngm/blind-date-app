import { observer } from 'mobx-react-lite';
import React from 'react'
import { PassionType } from '../../../types/profile';
import useProfileNavigation from '../../navigation/hooks/useProfileNavigation'
import { useStore } from '../../stores/store';
import PassionSelector from './components/PassionSelector'

const PassionScreen = () => {
  const { setPassions } = useStore().profileStore;
  const navigation = useProfileNavigation();
  const handleContinuePress = (passions: PassionType[]) => {
    setPassions(passions);
    navigation.navigate("IdealPlace");
  }

  return (
      <PassionSelector handleContinuePress={handleContinuePress}/>
  )
}

export default observer(PassionScreen);
