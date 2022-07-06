import { View, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { mainTheme } from '../../../../themes/mainTheme';
import { ProfileContext } from '../../context/ProfileProvider';

const AvatarUpload = () => {
    const {
        avatar,
        setAvatar,
    } = useContext(ProfileContext);

    const handlePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [2, 2], // Applicable to Android only
            quality: 1,
            base64: true,
        });
        
        if (result.cancelled) {
            setAvatar(null);
        }   
        else {
            setAvatar({
                uri: `data:image/jpeg;base64,${result?.base64}`
            });
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
                    {avatar
                    ? (
                        <Image source={{ uri: avatar.uri }} style={styles.avatar}/>
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

export default AvatarUpload

const styles = StyleSheet.create({
    cameraContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 25,
    }
})