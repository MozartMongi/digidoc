import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link, Loading } from '../../components'
import { colors, fonts, storeData, useForm } from '../../utils'
import {Fire} from '../../config'
import { showMessage } from 'react-native-flash-message'
import { useState } from 'react'

const Login = ({navigation}) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })
    const login = () => {
        setLoading(true)
        Fire.auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            Fire.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then(resDB => {
                setLoading(false)
                if(resDB.val()) {
                    storeData('user', resDB.val())
                    navigation.replace('MainPage')
                }
            })
        })
        .catch(err => {
            setLoading(false )
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white
            })
        })
    }
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false } style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input 
            label='Email Address'
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input 
            label='Password'
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secure
            />
            <Gap height={10} />
            <Link title='Lupa Password' size={12} />
            <Gap height={40} />
            <Button title='Masuk' onPress={login} />
            <Gap height={30} />
            <Link title='Buat Akun Baru' size={16} align={'center'} onPress={() => navigation.navigate('Register')} />
        </ScrollView>
        {loading && <Loading />}
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        padding:40,
        flex:1,
        backgroundColor: colors.white
    },
    title:{
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginVertical: 40,
        maxWidth: 153
    }
})