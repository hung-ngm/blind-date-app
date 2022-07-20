import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import PrimaryButton from '../../../../common/PrimaryButton'
import { Gender, ProfileContext } from '../../context/ProfileProvider'
import { mainTheme } from '../../../../themes/mainTheme';

interface GenderSelectorProps {
    handleContinuePress: () => void;
}
const GenderSelector: React.FC<GenderSelectorProps> = ({ handleContinuePress }) => {
    const {
        gender,
        setGender,
    } = useContext(ProfileContext);
    const isContinueButtonDisabled = gender !== null;
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>I am a</Text>
            </View>
            <View style={{
                flex: 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: 5,
            }}>
                <View style={{ flex: 3 }}>
                    <View style={styles.item}>
                        <PrimaryButton
                            text='Man'
                            extraStyles={gender === Gender.Man ? 
                                {...styles.buttonStyle, ...styles.buttonSelected} : {...styles.buttonStyle, ...styles.buttonDefault}
                            }
                            extraTextProps={gender === Gender.Man ? 
                                {...styles.textStyle, ...styles.textSelected} : {...styles.textStyle, ...styles.textDefault}
                            }
                            onPress={() => setGender(Gender.Man)}
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaryButton
                            text='Woman'
                            extraStyles={gender === Gender.Woman ? 
                                {...styles.buttonStyle, ...styles.buttonSelected} : {...styles.buttonStyle, ...styles.buttonDefault}
                            }
                            extraTextProps={gender === Gender.Woman ? 
                                {...styles.textStyle, ...styles.textSelected} : {...styles.textStyle, ...styles.textDefault}
                            }
                            onPress={() => setGender(Gender.Woman)}/>
                    </View>
                    <View style={styles.item}>
                        <PrimaryButton
                            text='Other'
                            extraStyles={gender === Gender.Other ? 
                                {...styles.buttonStyle, ...styles.buttonSelected} : {...styles.buttonStyle, ...styles.buttonDefault}
                            }
                            extraTextProps={gender === Gender.Other ? 
                                {...styles.textStyle, ...styles.textSelected} : {...styles.textStyle, ...styles.textDefault}
                            }
                            onPress={() => setGender(Gender.Other)}/>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <PrimaryButton
                        text='Continue'
                        onPress={handleContinuePress}
                        disabled={isContinueButtonDisabled}
                    />
                </View>
            </View>
        </View>
    )
}

export default GenderSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    item: {
        padding: 20,
    },
    title: {
        paddingLeft: 40,
        fontSize: 34,
    },
    buttonStyle: {
        height: 80,
    },
    buttonSelected: {
        backgroundColor: mainTheme.PRIMARY_COLOR,
    },
    buttonDefault: {
        backgroundColor: mainTheme.WHITE_COLOR,
    },
    textStyle: {
        fontSize: 30,
    },
    textSelected: {
        color: mainTheme.WHITE_COLOR,
    },
    textDefault: {
        color: mainTheme.DARK_COLOR,
    }
})
