import { View, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { mainTheme } from '../../../../themes/mainTheme';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

const AvatarUpload = () => {
    const { userProfile, setPhotoUrl } = useStore().profileStore;

    const handlePress = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [2, 2], // Applicable to Android only
                quality: 1,
                base64: true,
            });
            
            if (!result.cancelled) {
                await setPhotoUrl(result?.base64);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
            (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
            })();
        }, []);

    return (
        <View style={styles.cameraContainer}>
            <TouchableHighlight onPress={handlePress}>
                <View>
                    {userProfile.photoUrl
                    ? (
                        <Image source={{ uri: userProfile.photoUrl }} style={styles.avatar}/>
                    ) 
                    : (
                        <>
                            <Icon name="user" size={100} color={mainTheme.PRIMARY_COLOR}/>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row-reverse'
                            }}>
                                <Icon name="camera" size={20} color={mainTheme.PRIMARY_COLOR}/>
                            </View>
                        </>
                    )}
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default observer(AvatarUpload);

const styles = StyleSheet.create({
    cameraContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 25,
    }
})