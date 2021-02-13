import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import {DummyDoctor1, DummyDoctor2, DummyDoctor5, JSONCategoryDoctor} from '../../assets'

const Doctor = ({navigation}) => {
  
  return (
    <View style={styles.page}>
      <View style={styles.content} >
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.wrapperSection} >
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome} >Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <View style={styles.wrapperScroll} >
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <View style={styles.category}>
                <Gap width={32} />
                {
                  JSONCategoryDoctor.data.map(item => {
                    return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor')} />
                  })
                }
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel} >Dokter Pilihan</Text>
            <RatedDoctor name={'Alexa Rachel'} desc={'Pediatrician'} avatar={DummyDoctor1} onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor name={'Jono Marjono'} desc={'Dokter Anak'} avatar={DummyDoctor2} onPress={() => navigation.navigate('DoctorProfile')} />
            <RatedDoctor name={'Mien Pao'} desc={'Psikiater'} avatar={DummyDoctor5} onPress={() => navigation.navigate('DoctorProfile')} />
            <Text style={styles.sectionLabel} >Berita Kesehatan</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    wrapperSection:{ paddingHorizontal: 16 },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    category: {
      flexDirection: 'row'
    },
    wrapperScroll: {
      marginHorizontal: -16
    },
    content: {
      backgroundColor: colors.white,
      flex: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    sectionLabel: {
      fontSize: 16,
      fontFamily: fonts.primary[600],
      color: colors.text.primary,
      marginTop: 30,
      marginBottom: 16
    }
})