'use client'

import { useState } from 'react'

const Text_Input = ({ onInputChange }) => {
    const [textInput, setTextInput] = useState('')

    const handleTextInputChange = (e) => {
        const text = e.target.value
        
        setTextInput(text)
        if (onInputChange && typeof onInputChange === 'function') {
            onInputChange(text)
        }
    }

    return (
        <input type="text" value={textInput} onChange={handleTextInputChange} />
    )
}

export default Text_Input