import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({label, onChangeText, secure, value}) => {
  const [border, setBorder] = useState(colors.border)
  function focusForm () {
    setBorder(colors.tertiary)
  }
  function blurForm () {
    setBorder(colors.border)
  }
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput onFocus={focusForm} onBlur={blurForm} style={styles.input(border)} value={value} onChangeText={onChangeText} secureTextEntry={secure} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: (border) => (
      {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: border,
        padding: 12
    }
    ),
    label: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginBottom: 6
    }
})
