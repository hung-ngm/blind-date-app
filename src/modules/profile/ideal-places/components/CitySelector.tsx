import { View, Text, StyleSheet, TouchableHighlight, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { mainTheme } from '../../../../themes/mainTheme';

type CitySelectorModalProps = {
    open: boolean;
    setOpen: Function
}
const CitySelectorModal: React.FC<CitySelectorModalProps> = ({ open, setOpen }) => {
    return (
        <Modal
            visible={open}
            transparent={true}
            animationType="slide"
            onRequestClose={() => {
                setOpen(false);
            }}
        >
            <View style={{
                height: '80%',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                marginTop: 'auto',
                backgroundColor: mainTheme.WHITE_COLOR,
            }}>
                <View style={{
                    flexDirection: "column",
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        padding: 20,
                    }}>
                        <Button title='Cancel' onPress={() => setOpen(false)} color={mainTheme.PRIMARY_COLOR}/>
                        <Button title='Done' onPress={() => setOpen(false)} color={mainTheme.PRIMARY_COLOR}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const CitySelector = () => {
    const [modalOpen, setModalOpen] = useState(false);    
    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => {setModalOpen(true)}}
                style={styles.contentBoxContainer}
            >
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentText}>
                        City
                    </Text>
                    <Icon
                        name="right"
                        size={20}
                        color={mainTheme.PRIMARY_COLOR}
                        style={styles.icon}
                    />
                </View>                  
            </TouchableHighlight>
            <CitySelectorModal open={modalOpen} setOpen={setModalOpen} />
        </View>
    )
}

export default CitySelector

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
    contentText: {
        fontSize: 20,
    },
    icon: {
        flex: 1,
        textAlign: 'right',
    },
})

