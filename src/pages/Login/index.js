import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors, fonts } from '../../utils'

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label='Email Address'/>
            <Gap height={24} />
            <Input label='Password'/>
            <Gap height={10} />
            <Link title='Lupa Password' size={12} />
            <Gap height={40} />
            <Button title='Masuk' onPress={() => navigation.replace('MainPage')} />
            <Gap height={30} />
            <Link title='Buat Akun Baru' size={16} align={'center'} onPress={() => navigation.navigate('Register')} />
        </View>
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