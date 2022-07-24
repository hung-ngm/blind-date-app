import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { mainTheme } from '../../themes/mainTheme';
import PrimaryButton from '../../common/PrimaryButton';
import SkipButton from '../../common/SkipButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack' 
import { RootScreenTabParamList } from '../../types/navigation';

type MatchScreenNavigationProps = NativeStackScreenProps<
    RootScreenTabParamList,
    'GetMatchedScreen'
>

const GetMatchedScreen = ({navigation}: MatchScreenNavigationProps) => {

    const navigateToPlaceRecommendation = () => {
        //navigation.navigate('PlaceRecommendation');
        console.log('to place')
    }

    const navigateToHome = () => {
        //navigation.navigate('Home')
        console.log('to home')
    }

    const fakeUrl = 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg';
    const fakeUrl2 = 'https://gamek.mediacdn.vn/zoom/700_438/133514250583805952/2020/5/16/photo-1-15896097558091974904037.png'

    return (
        <View style = {styles.container}>
            <View style={styles.imageContainer}>
                <Image
                        source={{uri: fakeUrl2}}
                        resizeMode="cover"
                        style={styles.myImage}
                />
                <Image
                    source={{uri: fakeUrl}}
                    resizeMode="cover"
                    style={styles.otherImage}  
                    blurRadius={20}    
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