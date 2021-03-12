 export const getChatDate = (date) => {
    const hour = date.getHours()
    const minute = date.getMinutes()

    return `${hour}:${minute < 10 ? '0' + minute : minute} ${hour >= 12 ? 'PM' : 'AM'}`
}

export const setChatDate = (value) => {
    const year = value.getFullYear()
    const month = value.getMonth() + 1
    const day = value.getDate()

    return `${year}-${month}-${day}`
}