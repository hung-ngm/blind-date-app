import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { mainTheme } from '../../../../themes/mainTheme';

const LockedChatBox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.lockedChatText}>
                You cannot chat before other agrees to go on a date with you
            </Text>
        </View>
    )
}

export default LockedChatBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: mainTheme.LIGHT_GREY_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginBottom: 8,
        marginHorizontal: 8,
    },
    lockedChatText: {

    }
});