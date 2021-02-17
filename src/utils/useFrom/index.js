import { useState } from 'react'

export const useForm = (initiateValue) => {
    const [value, setValue] = useState(initiateValue)
    return [value, (formType, formValue) => {
        if(formType === 'reset') {
            return setValue(initiateValue)
        }
        return setValue({...value, [formType]: formValue })
    }]
}