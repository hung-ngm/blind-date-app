import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AvatarUpload from '../profile-detail/components/AvatarUpload'

const ProfileEditMainScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{
                flex: 2,
            }}>
                <Text style={styles.title}>
                    Photo
                </Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <AvatarUpload />
                </View>
            </View>
            <View style={{
                flex: 2,
            }}>
                <Text style={styles.title}>
                    Prompt
                </Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <AvatarUpload />
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileEditMainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        marginHorizontal: 40,
    },
    title: {
        fontSize: 25,
    }
})
