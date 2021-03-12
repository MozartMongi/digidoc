import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, errorMsg, fonts, getChatDate, getData, setChatDate } from '../../utils'
import { Fire } from '../../config'

const Chatting = ({navigation, route}) => {
    const doc = route.params
    const [chatContent, setChat] = useState('')
    const [user, setUser] = useState({})
    const [chatData, setChatData] = useState([])

    useEffect(() => {
        userLocal();
        const chatId = `${user.uid}_${doc.data.uid}`
        const urlFirebase = `chatting/${chatId}/allChat/`
        Fire.database().ref(urlFirebase).on('value', (snpashot) => {
            if(snpashot.val()) {
                const dataSnapshot = snpashot.val()
                const allChat = []
                Object.keys(dataSnapshot).map(key => {
                    const dataChat = dataSnapshot[key]
                    const newDataChat = []
                    Object.keys(dataChat).map(item => {
                        newDataChat.push({
                            id: item,
                            data: dataChat[item]
                        })
                    });
                    allChat.push({
                        id: key,
                        data: newDataChat
                    })
                })
                setChatData(allChat)
            }
        })
    }, [doc.data.uid, user.uid])
  
    const userLocal = () => {
        getData('user')
        .then(res => {
            setUser(res)
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const ChangeChat = (value) => {
        setChat(value)
    }
    const sendChat = () => {
        console.log('send chat : ', chatContent);
        const today = new Date()
        const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatDate(today),
            chatContent: chatContent
        }
        const chatId = `${user.uid}_${doc.data.uid}`
        const urlFirebase = `chatting/${chatId}/allChat/${setChatDate(today)}`
        const urlMessagesUser = `messages/${user.uid}/${chatId}`
        const urlMessagesDoc = `messages/${doc.data.uid}/${chatId}`
        const historyChatUser = {
            lastContent: chatContent,
            lastDateContent: today.getTime(),
            uidPartner: doc.data.uid
        }
        const historyChatDoc = {
            lastContent: chatContent,
            lastDateContent: today.getTime(),
            uidPartner: user.uid
        }

            
        Fire.database().ref(urlFirebase).push(data)
        .then(_ => {
            setChat('')

            Fire.database().ref(urlMessagesUser).set(historyChatUser)
            Fire.database().ref(urlMessagesDoc).set(historyChatDoc)

        })
        .catch(err => {
            errorMsg(err.message)
        })
    }
    return (
        <View style={styles.page}>
            <Header type='dark-profile' 
                title={doc.data.fullName} 
                desc={doc.data.profession} 
                photo={{uri: doc.data.photo}} 
                onPress={() => navigation.goBack()} 
            />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        chatData.map(chat => {
                            return (
                                <View key={chat.id}>
                                    <Text style={styles.chatDate}> {chat.id}</Text>
                                    {
                                        chat.data.map(item => {
                                            const isMe = item.data.sendBy === user.uid
                                            return  (
                                                <ChatItem 
                                                key={item.id}
                                                isMe={ isMe }
                                                text={item.data.chatContent}
                                                date={item.data.chatTime}
                                                photo={isMe ? null : {uri: doc.data.photo}}
                                                />
                                            )
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <InputChat 
            value={chatContent}
            onButtonPress={sendChat}
            onChangeText={(value) => ChangeChat(value)}
            />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    },
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {flex: 1}
})