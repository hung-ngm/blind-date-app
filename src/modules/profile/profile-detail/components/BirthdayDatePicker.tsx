import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PrimaryButton from '../../../../common/PrimaryButton';
import { mainTheme } from '../../../../themes/mainTheme';
import { useStore } from '../../../stores/store';

const BirthdayDatePicker = () => {
    const [open, setOpen] = useState(false);
    const { userProfile, setAge } = useStore().profileStore;
    
    const handlePress = () => {
        setOpen(true);
    }

    return (
        <>
            <PrimaryButton
                text={userProfile.age || 'Choose age'}
                textColor={mainTheme.PRIMARY_COLOR}
                backgroundColor={mainTheme.WHITE_COLOR}
                onPress={handlePress}
            />
            <DateTimePickerModal
                textColor={mainTheme.PRIMARY_COLOR}
                isVisible={open}
                mode="date"
                onConfirm={(birthday) =>{
                    setAge(new Date().getFullYear() - birthday.getFullYear())
                    setOpen(false)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
    )
}

export default observer(BirthdayDatePicker);