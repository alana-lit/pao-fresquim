import { useState } from 'react'
import './input.css'

export const Input = ({ id, placeholder, inputType, LabelIcon, hasIconAside }) => {
    const [dirty, setDirty] = useState(false);

    return (
        <div className='input_container'>
            {
                hasIconAside ?
                <label htmlFor={id} className='icon'>
                    <LabelIcon />
                </label> : null
            }
            <input onInput={(e) => setDirty(e.target.value.length > 0)} type={inputType} id={id} />
            <label htmlFor={id} className={`placeholder font_inter_semibold ${dirty ? "active" : ""}`}>{placeholder}</label>
        </div>
    )
}