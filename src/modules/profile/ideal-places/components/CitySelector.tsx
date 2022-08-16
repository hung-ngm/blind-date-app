import { View, Text, StyleSheet, TouchableHighlight, Modal, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { mainTheme } from '../../../../themes/mainTheme';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

type CitySelectorModalProps = {
    open: boolean;
    setOpen: Function;
    setCity: Function;
    setCountry: Function;
}
const CitySelectorModal: React.FC<CitySelectorModalProps> = observer(({ open, setOpen, setCity, setCountry }) => {
    const [tmpCity, setTmpCity] = useState('');
    const [tmpCountry, setTmpCountry] = useState('');

    const handleDonePress = () => {
        setCity(tmpCity);
        setTmpCountry(tmpCountry);
        setOpen(false);
    }
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
                        <Button title='Done' onPress={handleDonePress} color={mainTheme.PRIMARY_COLOR}/>
                    </View>
                    <View>
                        <TextInput
                            style={styles.searchBar}
                            value={tmpCity}
                            onChangeText={(text) => setTmpCity(text)}
                            placeholder="Type your city here"
                            placeholderTextColor="black"
                        />
                        <TextInput
                            style={styles.searchBar}
                            value={tmpCountry}
                            onChangeText={(text) => setTmpCountry(text)}
                            placeholder="Type your country here"
                            placeholderTextColor="black"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}); 
const CitySelector = () => {
    const { userProfile, setCity, setCountry, } = useStore().profileStore;
    const [modalOpen, setModalOpen] = useState(false);  
    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => {setModalOpen(true)}}
                style={styles.contentBoxContainer}
            >
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentText}>
                        {userProfile.city || "City"} , {userProfile.country || "Country"}
                    </Text>
                    <Icon
                        name="right"
                        size={20}
                        color={mainTheme.PRIMARY_COLOR}
                        style={styles.icon}
                    />
                </View>                  
            </TouchableHighlight>
            <CitySelectorModal open={modalOpen} setOpen={setModalOpen} setCity={setCity} setCountry={setCountry}/>
        </View>
    )
}

export default observer(CitySelector);

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
    searchBar: {
        marginHorizontal: 20,
        marginBottom: 10,
        paddingLeft: 10,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
    },
})

