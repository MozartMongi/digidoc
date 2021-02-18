import React from 'react'
import { useState } from 'react'
import {  View, StyleSheet, ScrollView } from 'react-native'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { colors, storeData, useForm } from '../../utils'
import {Fire} from '../../config'
import { showMessage } from 'react-native-flash-message'

const Register = ({navigation}) => {
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useForm({
        name: '',
        kerja: '',
        email: '',
        password: ''
    })

    function onNext () {
        setLoading(true)
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            setLoading(false)
            setForm('reset')
            const data = {
                name: form.name,
                kerja: form.kerja,
                email: form.email,
                uid: success.user.uid
            }
            Fire
            .database()
            .ref('users/' +success.user.uid+ '/')
            .set(data)
            storeData('user', data);
            navigation.navigate('UploadPhoto', data)
        })
        .catch((error) => {
            let errorMessage = error.message;
            setLoading(false)
            showMessage({
                message: errorMessage,
                type: 'default',
                color: colors.white,
                backgroundColor: colors.error
            })
        });
    }
    return (
        <>
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title='Daftar Akun' />
            <View style={styles.content} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Input label='Nama Lengkap' value={form.name} onChangeText={(value) => setForm('name', value)}/>
                    <Gap height={24} />
                    <Input label='Pekerjaan' value={form.kerja} onChangeText={(value) => setForm('kerja', value)}/>
                    <Gap height={24} />
                    <Input label='Email' value={form.email} onChangeText={(value) => setForm('email', value)}/>
                    <Gap height={24} />
                    <Input label='Password' value={form.password} onChangeText={(value) => setForm('password', value)} secure/>
                    <Gap height={40} />
                    <Button title='Berikutnya' onPress={onNext}/>
                </ScrollView>
            </View>
        </View>
        {loading && <Loading />}
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0
    },
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})