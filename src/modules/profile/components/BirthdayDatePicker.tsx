import React, { useState } from 'react'
import PrimaryButton from '../../../common/PrimaryButton'
import { mainTheme } from '../../../themes/mainTheme';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const BirthdayDatePicker = () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<null | Date>(null);
    const handlePress = () => {
        setOpen(true);
    }

    // yyyy/mm/dd
    const displayDate = (date: Date) => {
        const year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        return year + "/" + (month < 10 ? '0'+month : month) + "/" + (day < 10 ? '0'+day : day);
    }
    return (
        <>
            <PrimaryButton
                text={date && displayDate(date) || 'Choose birthday'}
                textColor={mainTheme.PRIMARY_COLOR}
                backgroundColor={mainTheme.WHITE_COLOR}
                onPress={handlePress}
            />
            <DateTimePickerModal
                isVisible={open}
                mode="date"
                onConfirm={(date) =>{
                    setDate(date)
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