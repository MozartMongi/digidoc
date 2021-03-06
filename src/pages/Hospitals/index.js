import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Hospital1, Hospital2, Hospital3, HospitalsBG } from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
  
  return (
    <View style={styles.page}>
      <ImageBackground source={HospitalsBG} style={styles.backgoround} >
        <Text style={styles.title}>Rumah Sakit Terdekat</Text>
        <Text style={styles.desc} >3 tersediaA</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital type={'Rumah Sakit'} name={'Citra Bunga Merdeka'} address={'Jln. Surya Sejahtera no.20'} pic={Hospital1} />
        <ListHospital  type={'Rumah Sakit Anak'} name={'Happy Family & Kids'} address={'Jln. Surya Sejahtera no.20'} pic={Hospital2}/>
        <ListHospital  type={'Rumah Sakit Jiwa'} name={'Tingkatan Paling Atas'} address={'Jln. Surya Sejahtera no.20'} pic={Hospital3}/>
      </View>
    </View>
  )
}

export default Hospitals

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  backgoround: {
    height: 240,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color:colors.white,
    textAlign: 'center'
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14
  }
})