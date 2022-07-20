import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import React, { useContext } from 'react'
import AvatarUpload from '../profile-detail/components/AvatarUpload'
import { Gender, GenderNames, PassionNames, Passions, ProfileContext } from '../context/ProfileProvider'
import useAppNavigation from '../../navigation/hooks/useAppNavigation'
import { mainTheme } from '../../../themes/mainTheme'
import Icon from 'react-native-vector-icons/AntDesign';

const ProfileEditMainScreen = () => {
    let {
        prompt,
        promptAnswer,
        selectedPassions,
        distance,
        minPrice,
        maxPrice,
        gender,
    } = useContext(ProfileContext);
    
    selectedPassions =  {
        [Passions.Art]: true,
        [Passions.Shopping]: true,
        [Passions.Run]: true,
        [Passions.Travelling]: true,
        [Passions.VideoGames]: true,
    }

    gender = gender || Gender.Man;

    const navigation = useAppNavigation();
    const handlePromptEditPress = () => {
        navigation.navigate('ProfileEditPrompt');
    }
    const handlePassionsEditPress = () => {
        navigation.navigate("ProfileEditPassion");
    }
    const handleIdealPlacesEditPress = () => {
        navigation.navigate("ProfileEditIdealPlaces");
    }
    const handleGenderEditPress = () => {
        navigation.navigate("ProfileEditGender");
    }
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{
                paddingBottom: 50,
            }}
            indicatorStyle='black'
        >
            <View style={{
                ...styles.item,
                flex: 2,
            }}>
                <Text style={{
                    ...styles.title,
                    ...styles.titleContentSpacing,
                }}>
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
                ...styles.item,
                flex: 2,
            }}>
                <Text style={{
                    ...styles.title,
                    ...styles.titleContentSpacing,
                }}>
                    Prompt
                </Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight
                        onPress={handlePromptEditPress}
                        style={styles.contentBoxContainer}
                    >
                        <View>
                            <Text style={{
                                ...styles.promptText,
                                ...styles.promptSpacing,
                            }}>
                                {prompt || "My simple pleasures"}
                            </Text>
                            <Text style={styles.promptAnswerText}>
                                {promptAnswer || "Bla Bla abc xyz"}
                            </Text>
                        </View>                  
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{
                ...styles.item,
                flex: 1,
            }}>
                <Text style={{
                    ...styles.title,
                    ...styles.titleContentSpacing,
                }}>
                    Passions
                </Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight
                        onPress={handlePassionsEditPress}
                        style={styles.contentBoxContainer}
                    >
                        <View style={styles.contentTextContainer}>
                            <Text style={styles.contentText}>
                                {Object.keys(selectedPassions).slice(0, 3).map(enum_val => PassionNames[Number(enum_val)]).join(', ') + (Object.keys(selectedPassions).length > 3 ? ", ..." : "")}
                            </Text>
                            <Icon
                                name="right"
                                size={20}
                                color={mainTheme.PRIMARY_COLOR}
                                style={styles.icon}
                            />
                        </View>                  
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{
                ...styles.item,
                flex: 1,
            }}>
                <Text style={{
                    ...styles.title,
                    ...styles.titleContentSpacing,
                }}>
                    Ideal Places
                </Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight
                        onPress={handleIdealPlacesEditPress}
                        style={styles.contentBoxContainer}
                    >
                        <View style={styles.contentTextContainer}>
                            <Text style={styles.contentText}>
                                {"< " + distance + "km, " + "$" + minPrice + "-" + "$" + maxPrice}
                            </Text>
                            <Icon
                                name="right"
                                size={20}
                                color={mainTheme.PRIMARY_COLOR}
                                style={styles.icon}
                            />
                        </View>                  
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{
                ...styles.item,
                flex: 1,
            }}>
                <Text style={{
                    ...styles.title,
                    ...styles.titleContentSpacing,
                }}>
                    Gender
                </Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableHighlight
                        onPress={handleGenderEditPress}
                        style={styles.contentBoxContainer}
                    >
                        <View style={styles.contentTextContainer}>
                            <Text style={styles.contentText}>
                                {GenderNames[Number(gender)]}
                            </Text>
                            <Icon
                                name="right"
                                size={20}
                                color={mainTheme.PRIMARY_COLOR}
                                style={styles.icon}
                            />
                        </View>                  
                    </TouchableHighlight>
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
        paddingHorizontal: 40,
    },
    item: {
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
    },
    titleContentSpacing: {
        paddingBottom: 40,
    },
    contentBoxContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: mainTheme.DARK_GREY_COLOR,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promptText: {
        fontSize: 25,
    },
    promptAnswerText: {
        fontSize: 20,
    },
    promptSpacing: {
        marginBottom: 20,
    },
    contentText: {
        fontSize: 20,
    },
    icon: {
        flex: 1,
        textAlign: 'right',
    },
})
