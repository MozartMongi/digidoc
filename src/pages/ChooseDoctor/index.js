import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor2 } from '../../assets'
import { Header, List } from '../../components'
import { Fire } from '../../config'
import { colors, fonts } from '../../utils'

const ChooseDoctor = ({navigation, route}) => {
  const item = route.params
  const [listDoc, setListDoc] = useState([])

  useEffect(() => {
    getDoc(item.category)
  }, [item.category])

  const getDoc = (value) => {
    Fire.database()
    .ref('doctors/')
    .orderByChild('category')
    .equalTo(value)
    .once('value')
    .then(res => {
      if(res.val()) {
        const oldData = res.val()
        const data = []
        Object.keys(oldData).map(item => {
          data.push({
            id: item,
            data: oldData[item]
          })
        })
        setListDoc(data)
      }
    })
  }
  
  return (
    <View style={styles.page} >
        <Header onPress={() => navigation.goBack()} title={`Pilih ${item.category}`} type='dark' />
        {
          listDoc.map(list => {
            return(
              <List 
              onPress={() => navigation.navigate('DoctorProfile', list) } 
              type='next'  
              profile={{uri: list.data.photo}} 
              name={list.data.fullName} 
              desc={list.data.gender} 
              />

            )
          })
        }
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