import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({label}) => {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.border,
        padding: 12
    },
    label: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginBottom: 6
    }
})
