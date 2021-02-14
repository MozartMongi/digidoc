import React from 'react'
import { useState } from 'react'
import {  View, StyleSheet, ScrollView } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors, useForm } from '../../utils'

const Register = ({navigation}) => {
    // const [name, setNama] = useState('')
    // const [kerja, setKerja] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [form, setForm] = useForm({
        name: '',
        kerja: '',
        email: '',
        password: ''
    })

    function onNext () {
        
        console.log(form);
        // navigation.navigate('UploadPhoto')
    }
    return (
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