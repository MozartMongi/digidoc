import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts, errorMsg } from '../../utils'
import {DummyDoctor1, DummyDoctor2, DummyDoctor5, JSONCategoryDoctor} from '../../assets'
import { useEffect } from 'react'
import { Fire } from '../../config'
import { useState } from 'react'

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([])
  const [categoryDok, setCategoryDok] = useState([])
  const [topDoc, setTopDoc] = useState([])
  useEffect(() => {
    getCatDoc();
    getRatedDoc();
    getNews();
  }, [])

  const getNews = () => {
    Fire.database()
    .ref('news/')
    .once('value')
    .then(res => {
      if(res.val()) {
        const data = res.val()
        const filteredData = data.filter( el => el !== null)
        setNews(filteredData)
      }
    })
    .catch(err => {
      errorMsg(err.message)
    })
  }

  const getCatDoc = () => {
    Fire.database()
    .ref('category_dokter/')
    .once('value')
    .then(res => {
      if(res.val()) {
        const data = res.val()
        const filteredData = data.filter( el => el !== null)
        setCategoryDok(filteredData)
      }
    })
    .catch(err => {
      errorMsg(err.message)
    })
  }

  const getRatedDoc = () => {
    Fire.database()
    .ref('doctors/')
    .orderByChild('rate')
    .limitToLast(3)
    .once('value')
    .then(res => {
      const oldData = res.val()
      const data = []
      Object.keys(oldData).map(key => {
         data.push({
           id: key,
           data: oldData[key]
         })
      })
      setTopDoc(data)
    })
    .catch(err => {
      errorMsg(err.message)
    })
  }
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
                  categoryDok.map(item => {
                    return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor', item)} />
                  })
                }
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel} >Dokter Pilihan</Text>
            {
              topDoc.map(doc => {
                return (
                  <RatedDoctor key={doc.id} name={doc.data.fullName} desc={doc.data.profession} avatar={{uri: doc.data.photo}} onPress={() => navigation.navigate('DoctorProfile', doc)} />
                )
              })
            }
            <Text style={styles.sectionLabel} >Berita Kesehatan</Text>
          </View>
          {news.map((item, index) => {
            return (
              <NewsItem 
              key={index} 
              title={item.title}
              date={item.date}
              image={item.image}
              />
            )
          })}
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