import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { useStore } from '../../stores/store'
import { getAge } from '../../utils/userUtils';
import AntDesIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { mainTheme } from '../../../themes/mainTheme';

const UserProfileTab = () => {
    const { user } = useStore().userStore;
    // get avatar uri from user object
    const dummyAvatarUri = 'https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg';

    const handleEditMainPress = () => {

    }

    const handleEditPromptPress = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={{
                ...styles.item,
                flex: 1,
            }}>
                <Text style={styles.title}>
                    Profile
                </Text>
            </View>
            <View style={{
                ...styles.item,
                flex: 2,
            }}>
                <Image source={{ uri: dummyAvatarUri }} style={styles.avatar}/>
            </View>
            <View style={{
                ...styles.item,
                flex: 1,
            }}>
                <Text style={styles.title}>
                    {user?.firstName || 'Lam'}, &nbsp; {getAge(user) || '20'}
                </Text>
            </View>
            <View style={{
                ...styles.item,
                flex: 3,
                ...styles.editButtonsContainer,
            }}>
                <TouchableHighlight style={styles.button} onPress={handleEditMainPress}>
                    <AntDesIcon name='edit' size={50} color={mainTheme.PRIMARY_COLOR} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={handleEditPromptPress}>
                    <EntypoIcon name='cog' size={50} color={mainTheme.PRIMARY_COLOR} />
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default UserProfileTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    item: {
        marginBottom: 20,
    },
    title: {
        fontSize: 34,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 25,
    },
    editButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 200,
    },
    button: {
        borderRadius: 50,
        backgroundColor: mainTheme.WHITE_COLOR,
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
