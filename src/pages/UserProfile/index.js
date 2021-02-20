import React, { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../assets'
import { Gap, Header, List, Profile } from '../../components'
import { colors, getData } from '../../utils'
import {Fire} from '../../config'
import { showMessage } from 'react-native-flash-message'

const UserProfile = ({navigation}) => {
    const [ profile, setProfile ] = useState({
        name: '',
        kerja: '',
        photo: ILNullPhoto
    })
    useEffect(() => {
        getData('user').then(res => {
            const data = res
            data.photo = {uri: res.photo};
            setProfile(data)
        })
    }, [])
    const logout = () => {
        Fire.auth().signOut()
        .then(() => {
            navigation.replace('GetStarted')
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white
            })
        })
    }
    return (
        <View style={styles.page}>
            <Header title='Profil' onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {profile.name.length > 0 && <Profile name={profile.name} desc={profile.kerja} photo={profile.photo} /> }
            <Gap height={14} />
            <List name={'Ubah Profil'} desc={'last update yesterday'} type={'next'} icon='edit-profile' onPress={() => navigation.navigate('UpdateProfile') } />
            <List name={'Bahasa'} desc={'last update yesterday'} type={'next'} icon='language' />
            <List name={'Kasih Rating'} desc={'last update yesterday'} type={'next'} icon='rate' />
            <List name={'Keluar'} desc={'last update yesterday'} type={'next'} icon='help' onPress={logout} />
        </View>
    )
}
export default UserProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    }
})