import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { mainTheme } from '../../../../themes/mainTheme';
import useProfileNavigation from '../../../navigation/hooks/useProfileNavigation';

const DoneButton = () => {
    const navigation = useProfileNavigation();
    const handleDonePress = () => {
        navigation.navigate('Prompt')
    }
    return (
        <TouchableWithoutFeedback
            onPress={handleDonePress}
        >
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: mainTheme.PRIMARY_COLOR,
                    fontSize: 18,
                }}>Done</Text>
                <Icon name="right" size={25} color={mainTheme.PRIMARY_COLOR} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default DoneButton