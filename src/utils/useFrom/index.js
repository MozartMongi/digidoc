import { useState } from 'react'

export const useForm = (initiateValue) => {
    const [value, setValue] = useState(initiateValue)
    return [value, (formType, formValue) => {
        return setValue({...value, [formType]: formValue })
    }]
}