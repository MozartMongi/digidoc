import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan" />
            <Button type='btn-send' disable />
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
    }
})