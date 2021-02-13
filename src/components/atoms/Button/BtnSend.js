import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnSend = ({disable}) => {

  return (
      <View style={styles.container(disable)}>
          {disable ? <IconSendDark /> : <IconSendLight />}
      </View>
  )
}

export default BtnSend

const styles = StyleSheet.create({
  container: (disable) => (
    {
        backgroundColor: disable ? colors.disable : colors.tertiary,
        width: 45,
        height: 45,
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8
    }
  )
})