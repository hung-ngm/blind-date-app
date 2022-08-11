import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PrimaryButton from '../../../../common/PrimaryButton'
import { mainTheme } from '../../../../themes/mainTheme';
import { GenderType, Gender } from '../../../../types/profile';
import { observer } from 'mobx-react-lite';

interface GenderSelectorProps {
    getGender: () => GenderType | null;
    setGender: (gender: GenderType) => void;
    handleContinuePress: () => void;
}
const GenderSelector: React.FC<GenderSelectorProps> =({ getGender, handleContinuePress, setGender }) => {
    const gender = getGender();
    const isContinueButtonDisabled = gender === null;
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
                            extraStyles={gender === Gender.MAN ? 
                                {...styles.buttonStyle, ...styles.buttonSelected} : {...styles.buttonStyle, ...styles.buttonDefault}
                            }
                            extraTextProps={gender === Gender.MAN ? 
                                {...styles.textStyle, ...styles.textSelected} : {...styles.textStyle, ...styles.textDefault}
                            }
                            onPress={() => setGender(Gender.MAN)}
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaryButton
                            text='Woman'
                            extraStyles={gender === Gender.WOMAN ? 
                                {...styles.buttonStyle, ...styles.buttonSelected} : {...styles.buttonStyle, ...styles.buttonDefault}
                            }
                            extraTextProps={gender === Gender.WOMAN ? 
                                {...styles.textStyle, ...styles.textSelected} : {...styles.textStyle, ...styles.textDefault}
                            }
                            onPress={() => setGender(Gender.WOMAN)}/>
                    </View>
                    <View style={styles.item}>
                        <PrimaryButton
                            text='Other'
                            extraStyles={gender === Gender.OTHER ? 
                                {...styles.buttonStyle, ...styles.buttonSelected} : {...styles.buttonStyle, ...styles.buttonDefault}
                            }
                            extraTextProps={gender === Gender.OTHER ? 
                                {...styles.textStyle, ...styles.textSelected} : {...styles.textStyle, ...styles.textDefault}
                            }
                            onPress={() => setGender(Gender.OTHER)}/>
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
};

export default observer(GenderSelector);

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
