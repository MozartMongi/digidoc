import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import BtnSend from './BtnSend'
import IconOnly from './iconOnly'

const Button = ({type, title, onPress, icon, disable}) => {
  if(type === 'btn-send') {
    return (
      <BtnSend disable={disable} />
    )
  }
  if(type == 'icon-only'){
    return (
        <IconOnly icon={icon} onPress={onPress} />
    )
  } 
  if(disable) {
    return (
      <View style={styles.disableBG}  >
        <Text style={styles.disableText} >{title}</Text>
      </View>
    )
  }
  else {
    return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress} >
        <Text style={styles.title(type)} >{title}</Text>
      </TouchableOpacity>
    )

  }
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10
    }),
    title: (type) => ({
        fontSize: 18,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
    }),
    disableBG : {
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: colors.disable
    },
    disableText: {
      fontSize: 18,
      fontFamily: fonts.primary[600],
      textAlign: 'center',
      color: colors.disableText
    }
})