import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { IconRemovePhoto } from '../../assets'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors } from '../../utils'

const UpdateProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title={'Ubah Profil'} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <Profile />
                <IconRemovePhoto style={styles.removePhoto} />
                <Gap height={26} />
                <Input label={'Nama Lengkap'} />
                <Gap height={24} />
                <Input label={'Pekerjaan'} />
                <Gap height={24} />
                <Input label={'Email'} />
                <Gap height={24} />
                <Input label={'Password'} />
                <Gap height={40} />
                <Button title={'Simpan Profil'} onPress={() => navigation.goBack('UserProfile')} />
            </ScrollView >
        </View>
    )
}
export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        padding: 40,
        paddingTop: 0
    },
    removePhoto: {
        position: 'absolute',
        right: 94,
        bottom: 514
    }
})