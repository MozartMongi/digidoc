import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name, desc, photo, isRemove, onPress}) => {
    return (
        <View style={styles.container} >
            {
                isRemove ? 
                    <TouchableOpacity style={styles.avatarBorder} onPress={onPress}>
                        <Image style={styles.avatar} source={photo} style={styles.avatar} />
                    </TouchableOpacity>
                :
                <View style={styles.avatarBorder}>
                    <Image style={styles.avatar} source={photo} style={styles.avatar} />
                </View>
            }
            
            <View>
                {
                    name && (
                        <>
                            <Text style={styles.name} >{name}</Text>
                            <Text style={styles.profession}>{desc}</Text>
                        </>
                    )
                }
            </View>
        </View>
    )
}
export default Profile

const styles = StyleSheet.create({
    avatarBorder: {
        width: 130,
        height: 130,
        borderRadius: 130/2,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110/2
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 16,
        textAlign: 'center'
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center'
    }
})