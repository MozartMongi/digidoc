import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import IsMe from './isMe'
import Other from './Other'

const ChatItem = ({isMe}) => {
    if(isMe) {
        return <IsMe />
    } else {
        return <Other />
    }
    
}

export default ChatItem

