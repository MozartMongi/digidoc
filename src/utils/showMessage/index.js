import { showMessage } from 'react-native-flash-message'
import { colors } from '../colors'

export const errorMsg = (msg) => {
    showMessage({
        message: msg,
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white
    })
}
export const successMsg = (msg) => {
    showMessage({
        message: msg,
        type: 'default',
        backgroundColor: colors.primary,
        color: colors.white
    })
}