import React, {useEffect} from 'react'
import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = ({onPress}) => {
    useEffect(() => {
        getData('user')
        .then(res => {
            const data = res
            data.photo = {uri: res.photo}
            setProfile(data)
        })
      }, [])

      const [profile, setProfile]= useState({
          name: '',
          kerja: '',
          photo: ILNullPhoto
      })
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image style={styles.avatar} source={profile.photo} />
        <View>
            <Text style={styles.name} >{profile.name}</Text>
            <Text style={styles.profession} >{profile.kerja}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46/2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize'
    },
    profession : {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize'
    }
})