import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gap, Header, List, Profile } from '../../components'
import { colors } from '../../utils'

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Profil' onPress={() => navigation.goBack()} />
            <Gap height={10} />
            <Profile name={'Shayna Melinda'} desc={'Product Designer'} />
            <Gap height={14} />
            <List name={'Ubah Profil'} desc={'last update yesterday'} type={'next'} icon='edit-profile' onPress={() => navigation.navigate('UpdateProfile') } />
            <List name={'Edit'} desc={'last update yesterday'} type={'next'} icon='language' />
            <List name={'Edit'} desc={'last update yesterday'} type={'next'} icon='rate' />
            <List name={'Edit'} desc={'last update yesterday'} type={'next'} icon='help' />
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