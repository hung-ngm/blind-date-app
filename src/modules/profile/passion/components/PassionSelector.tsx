import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import PassionList from './PassionList';
import PrimaryButton from '../../../../common/PrimaryButton';
import { mainTheme } from '../../../../themes/mainTheme';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';
import { PassionType } from '../../../../types/profile';

interface PassionSelectorProps {
    handleContinuePress: (passions: PassionType[]) => void;
}

export type SelectedPassionsType = {
    [key in PassionType]: Boolean;
}

const PassionSelector: React.FC<PassionSelectorProps> = ({ handleContinuePress }) => {
    const { userProfile } = useStore().profileStore;
    const [selectedPassions, setSelectedPassions] = useState<SelectedPassionsType>(userProfile.passions.reduce((prev: SelectedPassionsType, cur: PassionType) => {
        return ({
            ...prev,
            [cur]: true,
        })
    }, {} as SelectedPassionsType));
    const isContinueButtonDisabled = Object.keys(selectedPassions).length === 0;
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}
            >
                <Text style={styles.title}>Your passions</Text>
                    <Text style={styles.description}>
                        Select a few of your interests and let everyone know what you're passionate about.
                    </Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={{ flex: 3 }}>
                    <PassionList selectedPassions={selectedPassions} setSelectedPassions={setSelectedPassions} />
                </View>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                }}>
                    <PrimaryButton
                        text='Continue'
                        onPress={() => {handleContinuePress(Object.keys(selectedPassions) as PassionType[])}}
                        extraTouchableHighlightProps={{
                        disabled: isContinueButtonDisabled
                        }}
                        extraStyles={isContinueButtonDisabled ? {
                        opacity: '0.5'
                        } : {}}
                    />
                </View>
            </View>
        </View>
    )
}

export default observer(PassionSelector);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    title: {
        fontSize: 34,
        padding: 5,
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: 50,
        marginBottom: 30,
    },
    description: {
        fontSize: 18,
        padding: 5,
    },
    detailContainer: {
        flex: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 5,
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
