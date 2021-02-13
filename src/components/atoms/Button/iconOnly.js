import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ArrowBackDark, ArrowBackLight } from '../../../assets'

const IconOnly = ({onPress ,icon}) => {
    function Icon () {
        if (icon == 'back-dark') {
            return <ArrowBackDark />
        } 
        if (icon == 'back-light') {
            return <ArrowBackLight />
        }
        return <ArrowBackDark />
    }

  return (
      <TouchableOpacity onPress={onPress} >
          <Icon />
      </TouchableOpacity>
  )
}

export default IconOnly

const styles = StyleSheet.create({
  
})