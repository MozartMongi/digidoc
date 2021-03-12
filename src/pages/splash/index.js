import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets/ilustration'
import { Fire } from '../../config'
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
  
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if(user) {
          navigation.replace('MainPage')
        } else {
          navigation.replace('GetStarted')
        }
      }, 2000);
    })
    return () => unsubscribe()
  }, [navigation])


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