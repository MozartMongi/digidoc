import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title={"Unggah Foto"} onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image style={styles.avatar} source={ILNullPhoto} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Gap height={26} />
                    <Text style={styles.name} >Shayna MelindaS</Text>
                    <Text style={styles.profession} >Product designer</Text>
                </View>
                <View>
                    <Button title="Unggah dan Lanjutkan" onPress={() => navigation.replace('MainPage') } />
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
    avatar: {width: 110, height: 110},
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