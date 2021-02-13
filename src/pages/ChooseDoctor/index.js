import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor2 } from '../../assets'
import { Header, List } from '../../components'
import { colors, fonts } from '../../utils'

const ChooseDoctor = ({navigation}) => {
  
  return (
    <View style={styles.page} >
        <Header onPress={() => navigation.goBack()} title='Pilih Dokter Anak' type='dark' />
        <List onPress={() => navigation.navigate('Chatting') } type='next'  profile={DummyDoctor2} name="Jono Marjono" desc='Pria' />
        <List type='next'  profile={DummyDoctor2} name="Jono Marjono" desc='Pria' />
        <List type='next'  profile={DummyDoctor2} name="Jono Marjono" desc='Pria' />
        <List type='next'  profile={DummyDoctor2} name="Jono Marjono" desc='Pria' />
        <List type='next'  profile={DummyDoctor2} name="Jono Marjono" desc='Pria' />
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
})