import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets/ilustration'
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 2000);
  })
  return (
    <View style={styles.page}>
          <ILLogo />
      <Text style={styles.title} >DigiDoc</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent:'center', 
    backgroundColor: colors.white
  },
  title: {fontSize: 20, 
    fontFamily: fonts.primary[600], 
    color: colors.text.primary, 
    marginTop: 20 },
})