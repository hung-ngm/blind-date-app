import React, { useState } from 'react'
import PrimaryButton from '../../../common/PrimaryButton'
import { mainTheme } from '../../../themes/mainTheme';
import DateTimePickerModal from "react-native-modal-datetime-picker";

type Props = {
    birthday: null | Date;
    setBirthday: Function;
}
const BirthdayDatePicker = (props: Props) => {
    const [open, setOpen] = useState(false);
    const { birthday, setBirthday } = props;
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