import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyUser, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors, getData, storeData } from '../../utils'
import {Fire} from '../../config'
import { showMessage } from 'react-native-flash-message'
import {launchImageLibrary} from 'react-native-image-picker'


const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        name: '',
        kerja: '',
        email: ''
    })
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoDB, setPhotoDB] = useState('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res
            setPhoto({uri: res.photo})
            setProfile(data)
        })
    }, [])

    const update = () => {
        if(password.length > 0) {
            if(password.length < 6) {
                showMessage({
                    message: 'password kurang dari 6 karakter',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            } else {
                updatePassword();
                updateProfileData();
                navigation.replace('MainPage')
            }
        } else {
            updateProfileData();
            navigation.replace('MainPage')

        }

        
    }

    const change = (key, value) => {
        setProfile({
            ...profile,
            [key] : value
        })
    }
    const updatePassword = () => {
        Fire.auth().onAuthStateChanged(user => {
            if(user) {
                user.updatePassword(password)
                .catch(err => {
                    showMessage({
                        message: err.message,
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white
                    })
                })
            }
        })
    }

    const updateProfileData = () => {
        const data = profile
        data.photo = photoDB
        Fire.database()
        .ref(`users/${profile.uid}/`)
        .update(data)
        .then(() => {
            console.log('success');
            storeData('user', data)
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
    const getImage = () => {
        launchImageLibrary({quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, (response) => {
            if(response.didCancel || response.error) {
                showMessage({
                    message: 'Anda tidak jadi unggah foto ?',
                    type: 'default',
                    color: colors.white,
                    backgroundColor: colors.error
                })
            } else {
                const source = {uri: response.uri }
                setPhotoDB(`data:${response.type};base64, ${response.base64}`);
                setPhoto(source )
            }
        })
    }
    return (
        <View style={styles.page}>
            <Header title={'Ubah Profil'} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <Profile photo={photo} isRemove onPress={getImage} />
                <IconRemovePhoto style={styles.removePhoto} />
                <Gap height={26} />
                <Input label={'Nama Lengkap'} value={profile.name} onChangeText={(value) => change('name', value)}/>
                <Gap height={24} />
                <Input label={'Pekerjaan'} value={profile.kerja} onChangeText={(value) => change ('kerja', value)}/>
                <Gap height={24} />
                <Input label={'Email'} value={profile.email} disable/>
                <Gap height={24} />
                <Input label={'Password'} value={password} secure onChangeText={(value) => setPassword(value)}/>
                <Gap height={40} />
                <Button title={'Simpan Profil'} onPress={update} />
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