import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { List } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, getData } from '../../utils'

const Messages = ({navigation}) => {
  const [user, setUser] = useState({})
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    userLocal()
    const rootDB = Fire.database().ref();
    const urlHistoryChat = `messages/${user.uid}/`
    const messageDB = rootDB.child(urlHistoryChat)
    messageDB.on('value', async snapshot => {
      if(snapshot.val()) {
        const currData = snapshot.val()
        const arrData = []
        const promises = await Object.keys(currData).map( async item => {
          const urlUidDoc = `doctors/${currData[item].uidPartner}`;
          const detailDoc = await rootDB.child(urlUidDoc).once('value')
          arrData.push({
            id: item,
            detailDoc : detailDoc.val(),
            ...currData[item]
          })
        })
        await Promise.all(promises);
        setDoctors(arrData)
      }
    })
  },[user.uid])

  const userLocal = () => {
    getData('user')
    .then(res => {
        setUser(res)
    })
    .catch(err => {
        console.log(err.message);
    })
}
  
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title} >Messages</Text>
        {
          doctors.map(doctor => {
            const dataDoctor = {
              id: doctor.detailDoc.uid,
              data: doctor.detailDoc
            }
            return (
              <List key={doctor.id}  
              name={doctor.detailDoc.fullName} 
              desc={doctor.lastContent}
              profile={{uri: doctor.detailDoc.photo}} 
              onPress={() => navigation.navigate('Chatting', dataDoctor)} 
              />
            )
          })
        }
      </View>
    </View>
  )
}
 
export default Messages

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginLeft: 16,
    color: colors.text.primary
  }
})