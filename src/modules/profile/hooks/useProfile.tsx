import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'

const useProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState<null | Date>(null);
    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        birthday,
        setBirthday
    }
}

export default useProfile