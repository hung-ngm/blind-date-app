import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import React from 'react'
import AvatarUpload from '../profile-detail/components/AvatarUpload'
import { GenderNames, GenderType, PassionNames, PassionType } from '../../../types/profile';
import useAppNavigation from '../../navigation/hooks/useAppNavigation'
import { mainTheme } from '../../../themes/mainTheme'
import Icon from 'react-native-vector-icons/AntDesign';
import { useStore } from '../../stores/store'
import { observer } from 'mobx-react-lite';

type PromptDisplayerProps = {
    getPrompt: () => string;
}
const PromptDisplayer = observer(({ getPrompt }: PromptDisplayerProps) => (
    <Text style={{
        ...styles.promptText,
        ...styles.promptSpacing,
    }}>
        {getPrompt() || "N/A"}
    </Text>
));

type PromptAnswerDisplayerProps = {
    getPromptAnswer: () => string;
}
const PromptAnswerDisplayer = observer(({ getPromptAnswer }: PromptAnswerDisplayerProps) => (
    <Text style={{
        ...styles.promptAnswerText,
        ...styles.promptSpacing,
    }}>
        {getPromptAnswer() || "N/A"}
    </Text>
));

type PassionsDisplayerProps = {
    getPassions: () => PassionType[];
}
const PassionsDisplayer = observer(({ getPassions }: PassionsDisplayerProps) => (
    <Text style={styles.contentText}>
        {getPassions().map(p => PassionNames[p]).join(', ') || "N/A"}
    </Text>
));

type IdealPlaceDisplayerProps = {
    getIdealPlace: () => {
        city: string;
        distance: number;
        priceMin: number;
        priceMax: number;
    };
}
const IdealPlaceDisplayer = observer(({ getIdealPlace }: IdealPlaceDisplayerProps) => {
    const idealPlace = getIdealPlace();
    return (
        <Text style={styles.contentText}>
            {"< " + idealPlace.distance + "km, " + "$" + idealPlace.priceMin + "-" + "$" + idealPlace.priceMax}
        </Text>
    )
});

type GenderDisplayerProps = {
    getGender: () => GenderType | null;
}
const GenderDisplayer = observer(({ getGender }: GenderDisplayerProps) => {
    return (
        <Text style={styles.contentText}>
            {getGender() ? GenderNames[getGender()] : "N/A"}
        </Text>
    )
});

const ProfileEditMainScreen = () => {
    const { userProfile } = useStore().profileStore;    

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
                            <PromptDisplayer getPrompt={() => userProfile.prompt}/>
                            <PromptAnswerDisplayer getPromptAnswer={() => userProfile.promptAnswer}/>
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
                            <PassionsDisplayer getPassions={() => userProfile.passions}/>
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
                            <IdealPlaceDisplayer getIdealPlace={() => ({
                                city: userProfile.city,
                                priceMin: userProfile.priceMin,
                                priceMax: userProfile.priceMax,
                                distance: userProfile.distance,
                            })}/>
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
                            <GenderDisplayer getGender={() => userProfile.gender}/>
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

export default observer(ProfileEditMainScreen);

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
