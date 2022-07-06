import React, { useContext, useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PrimaryButton from '../../../../common/PrimaryButton';
import { mainTheme } from '../../../../themes/mainTheme';
import { ProfileContext } from '../../context/ProfileProvider';

const BirthdayDatePicker = () => {
    const [open, setOpen] = useState(false);
    const {
        birthday,
        setBirthday,
    } = useContext(ProfileContext);
    
    const handlePress = () => {
        setOpen(true);
    }

    // yyyy/mm/dd
    const displayDate = (birthday: Date) => {
        const year = birthday.getFullYear();
        let month = birthday.getMonth();
        let day = birthday.getDate();
        return year + "/" + (month < 10 ? '0'+month : month) + "/" + (day < 10 ? '0'+day : day);
    }
    return (
        <>
            <PrimaryButton
                text={birthday && displayDate(birthday) || 'Choose birthday'}
                textColor={mainTheme.PRIMARY_COLOR}
                backgroundColor={mainTheme.WHITE_COLOR}
                onPress={handlePress}
            />
            <DateTimePickerModal
                isVisible={open}
                mode="date"
                onConfirm={(birthday) =>{
                    setBirthday(birthday)
                    setOpen(false)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
    )
}

export default BirthdayDatePicker