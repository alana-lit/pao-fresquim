import { useState } from 'react'
import './input.css'

export const Input = ({ id, placeholder, inputType, LabelIcon, hasIconAside }) => {
    const [dirty, setDirty] = useState(false);

    const handleInputEvent = (e) => {
        if(inputType != 'number') { // If the input is not a number, do nothing but set dirty to true or false.
            setDirty(e.target.value.length > 0)
            return
        }
        
        // Otherwise, needs to normalize the number. Since input type="number" won't accept floating point numbers, had to do one by hand (if u're reading this, help me pls I HATE JAVASCRIPT).
        const val = e.target.value
        const rmvLetters = val.replace(/[^\d.,]/g, '').replace(',', '.')

        // Just in case user tries to input more than one "." for decimal part.
        let hasDecimal = false
        let normNum = ''
        for(const digit of rmvLetters) {
            if(digit == '.' && hasDecimal) {
                continue
            } else if(digit == '.') {
                hasDecimal = true;
            }

            normNum += digit
        }
        
        document.querySelector(`input#${id}`).value = normNum
        setDirty(e.target.value.length > 0)
    }

    return (
        <div className='input_container'>
            {
                hasIconAside ?
                <label htmlFor={id} className='icon'>
                    <LabelIcon />
                </label> : null
            }
            <input onInput={(e) => handleInputEvent(e)} type={inputType != 'number' ? inputType : 'text'} id={id} />
            <label htmlFor={id} className={`placeholder font_inter_semibold ${dirty ? "active" : ""}`}>{placeholder}</label>
        </div>
    )
}