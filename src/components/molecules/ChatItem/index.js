import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import IsMe from './isMe'
import Other from './Other'

const ChatItem = ({isMe, text, date, photo}) => {
    if(isMe) {
        return <IsMe text={text} date={date} />
    } else {
        return <Other text={text} date={date} photo={photo} />
    }
    
}

export default ChatItem

