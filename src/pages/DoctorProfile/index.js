import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Profil Dokter' onPress={() => navigation.goBack()} />
            <Profile name={'Alexa Rachel'} desc={'Pediatrician'} />
            <Gap height={10} />
            <ProfileItem label={'Alumnus'} value={'Universitas Indonesia, 2020'} />
            <ProfileItem label={'Tempat Praktik'} value={'Rumah Sakit Umum, Bandung'} />
            <ProfileItem label={'No. STR'} value={'0000116622081996'} />
            <View style={styles.action}>
                <Button title={'Mulai Konsultasi'} onPress={() => navigation.navigate('Chatting')} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23
    }
})