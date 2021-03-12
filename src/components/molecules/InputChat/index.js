import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({onChangeText, onButtonPress, value}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder="Tulis Pesan" />
            <Button type='btn-send' disable={value.length < 1} onPress={onButtonPress} />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        maxHeight: 45,
        fontFamily: fonts.primary.normal,
        fontSize: 14
    },
    container: {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: colors.white
    }
})