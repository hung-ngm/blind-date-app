import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import NavigationButtons from '../components/NavigationButtons'
import PrimaryButton from '../../../common/PrimaryButton'
import { mainTheme } from '../../../themes/mainTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../../types/navigation'

enum Gender {
    Man = 1,
    Woman,
    Other
};

type GenderScreenNavigationProps = NativeStackScreenProps<
    AppStackParamList,
    'Gender'
>
const GenderScreen = ({ navigation }: GenderScreenNavigationProps) => {
    const [gender, setGender] = useState<Gender | null>(null);
    const handleContinuePress = () => {
        navigation.navigate('Passion');
    }
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1
            }}>
                <NavigationButtons leftComponent={<Text>Back</Text>} rightComponent={<Text>Skip</Text>}/>
            </View>
            <View style={{
                flex: 1,
            }}
            >
                <Text style={styles.title}>I am a</Text>
            </View>
            <View style={{
                flex: 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: 5,
            }}>
                <View style={{
                    flex: 3
                }}>
                    <View style={styles.item}>
                        <PrimaryButton
                            text='Man'
                            extraStyles={gender === Gender.Man ? styles.buttonSelected : styles.buttonDefault}
                            extraTextProps={gender === Gender.Man ? styles.textSelected : styles.textDefault}
                            onPress={() => setGender(Gender.Man)}
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaryButton text='Woman' extraStyles={gender === Gender.Woman ? styles.buttonSelected : styles.buttonDefault} onPress={() => setGender(Gender.Woman)}/>
                    </View>
                    <View style={styles.item}>
                        <PrimaryButton text='Other' extraStyles={gender === Gender.Other ? styles.buttonSelected : styles.buttonDefault} onPress={() => setGender(Gender.Other)}/>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                }}>
                    <PrimaryButton text='Continue' onPress={handleContinuePress}/>
                </View>
            </View>
        </View>
    )
}

export default GenderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
    },
    title: {
        paddingLeft: 40,
        fontSize: 34,
    },
    buttonSelected: {
        backgroundColor: mainTheme.PRIMARY_COLOR,
    },
    buttonDefault: {
        backgroundColor: mainTheme.WHITE_COLOR,
    },
    textSelected: {
        color: mainTheme.WHITE_COLOR,
    },
    textDefault: {
        color: mainTheme.DARK_COLOR,
    }
})