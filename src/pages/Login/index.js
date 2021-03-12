import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors, fonts, storeData, useForm, errorMsg,  } from '../../utils'
import {Fire} from '../../config'
import { useDispatch } from 'react-redux'

const Login = ({navigation}) => {
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const login = () => {
        dispatch({type: 'SET_LOADING', value: true})
        Fire.auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            Fire.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then(resDB => {
                dispatch({type: 'SET_LOADING', value: false})
                if(resDB.val()) {
                    storeData('user', resDB.val())
                    navigation.replace('MainPage')
                }
            })
        })
        .catch(err => {
            dispatch({type: 'SET_LOADING', value: false})
            errorMsg(err.message)
        })
    }
    return (
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