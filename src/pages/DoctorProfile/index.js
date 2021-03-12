import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation, route}) => {
    const doc = route.params
    return (
        <View style={styles.page}>
            <Header title='Profil Dokter' onPress={() => navigation.goBack()} />
            <Profile name={doc.data.fullName} desc={doc.data.profession} photo={{uri: doc.data.photo}} />
            <Gap height={10} />
            <ProfileItem label={'Alumnus'} value={doc.data.university} />
            <ProfileItem label={'Tempat Praktik'} value={doc.data.hospital_address} />
            <ProfileItem label={'No. STR'} value={doc.data.str_number} />
            <View style={styles.action}>
                <Button title={'Mulai Konsultasi'} onPress={() => navigation.navigate('Chatting', doc)} />
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