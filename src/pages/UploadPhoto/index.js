import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts, storeData } from '../../utils'
import {launchImageLibrary} from 'react-native-image-picker'
import {showMessage} from 'react-native-flash-message'
import { Fire } from '../../config'

const UploadPhoto = ({navigation, route}) => {
    const {name, kerja, uid} = route.params
    const [photoDB, setPhotoDB] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)
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
                console.log(response.data);
                const source = {uri: response.uri }
                setPhotoDB(`data:${response.type};base64, ${response.base64}`);
                setPhoto(source )
                setHasPhoto(true)
            }
        })
    }
    const unggah = () => {
        Fire.database()
        .ref('users/' +uid+ '/')
        .update({photo: photoDB})
        const data = route.params
        data.photo = photoDB
        storeData('user', data)
        navigation.replace('MainPage')
    }
    return (
        <View style={styles.page}>
            <Header title={"Unggah Foto"} onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage} >
                        <Image style={styles.avatar} source={photo} />
                        {
                            hasPhoto ?
                            <IconRemovePhoto style={styles.addPhoto} /> :
                            <IconAddPhoto style={styles.addPhoto} />
                        }                        
                    </TouchableOpacity>
                    <Gap height={26} />
                    <Text style={styles.name} >{name}</Text>
                    <Text style={styles.profession} >{kerja}</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto } title="Unggah dan Lanjutkan" onPress={unggah} />
                    <Gap height={30} />
                    <Link title="Lewati" align={'center'} size={16} onPress={() => navigation.replace('MainPage') }/>
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: { flex:1, backgroundColor: colors.white},
    avatar: {width: 110, height: 110, borderRadius: 110 /2},
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})