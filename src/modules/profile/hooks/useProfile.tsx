import { useState } from 'react'

export type Avatar = {
    uri: string;
}
const useProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState<null | Date>(null);
    const [avatar, setAvatar] = useState<Avatar | null>(null);

    const submitProfile = () => {
        // TODO: Add to firestore and storage
        console.log("=== Profile submitted ===");
        console.log("First name: ", firstName);
        console.log("Last name: ", lastName);
        console.log("birthday name: ", birthday?.toDateString());
    }
    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        birthday,
        setBirthday,
        avatar,
        setAvatar,
        submitProfile,
    }
}

export default useProfile