import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { DummyDoctor2 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({onPress, title, desc, photo}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" onPress={onPress} icon="back-light" />
            <View style={styles.content}>
                <Text style={styles.name}> {title}</Text>
                <Text style={styles.desc} > {desc}</Text>
            </View>
            <Image style={styles.avatar} source={photo} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row'
    },
    content: {flex: 1},
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46/2
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        marginTop: 6,
        textAlign: 'center',
        color: colors.text.subTitle
    }
})