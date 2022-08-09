import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { mainTheme } from '../../themes/mainTheme';
import PrimaryButton from '../../common/PrimaryButton';
import SkipButton from '../../common/SkipButton';
import useAppNavigation from '../navigation/hooks/useAppNavigation';
import useRootNavigation from '../navigation/hooks/useRootNavigation';
import { useStore } from '../stores/store';

const GetMatchedScreen = () => {
    const appNav = useAppNavigation();
    const rootNav = useRootNavigation();
    const { currentMatch } = useStore().matchStore;
    const { user } = useStore().userStore;
    const { userProfile } = useStore().profileStore;

    const navigateToPlaceRecommendation = () => {
        appNav.navigate('Places');
    }

    const navigateToHome = () => {
        rootNav.navigate('Home');
    }

    if (!currentMatch || !user || !userProfile) {
        return null;
    }

    const otherUser = currentMatch.users[currentMatch.userMatched.find((id) => id !== user?.uid) as string];

    return (
        <View style = {styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: userProfile.photoUrl}}
                    resizeMode="cover"
                    style={styles.myImage}
                    blurRadius={30}
                />
                <Image
                    source={{uri: otherUser.photoUrl}}
                    resizeMode="cover"
                    style={styles.otherImage}  
                    blurRadius={30}    
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.headerText}>It's a match!</Text>
                <Text style={styles.descriptionText}>Someone want to go on a food blind date with you</Text>
            </View>
            <View style={styles.buttonGroup}>
                <PrimaryButton
                    text = 'Find a meeting place'
                    textColor = {mainTheme.WHITE_COLOR}
                    onPress={navigateToPlaceRecommendation}
                />
                <SkipButton
                    name = 'Continue to swipe'
                    onPress={navigateToHome}
                />
            </View>
        </View>
    )
}

export default GetMatchedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex:2.5,
        paddingTop: 50,  
        position: 'relative',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myImage: {
        alignSelf: 'flex-start',
        width: 150,
        height: 200,
        borderRadius: 15,
        transform: [{ rotate: '10deg' }],
    },
    otherImage: {
        width: 150,
        height: 200,
        borderRadius: 15,
        transform: [{ rotate: '-20deg' }]
    },
    textContainer: {
        alignItems: 'center',
        flex:1,
    },
    headerText: {
        fontSize: 27,
        color: mainTheme.PRIMARY_COLOR
    },
    descriptionText: {
        fontSize: 14,
    },
    buttonGroup: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    }, 
})