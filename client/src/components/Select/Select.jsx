import { useEffect, useRef, useState } from "react"
import { SelectOption } from "./SelectOption/SelectOption"

import './select.css'

export const Select = ({ LabelIcon, defaultValue, optionsList, acceptsDefault}) => {
    const [show, setShow] = useState(false)
    const [isClosing, setClosing] = useState(false)
    const selectRef = useRef(null)

    const toggleActive = () => {
        setShow(!show)
    }

    useEffect(() => {
        const handleOutClick = (e) => {
            if(selectRef.current && !selectRef.current.contains(e.target)) {
                setClosing(true)

                setTimeout(() => {
                    setClosing(false)
                    setShow(false)
                }, 500);
            }
        }

        document.addEventListener('mousedown', handleOutClick)
    }, [])

    return (
        <div className="select_container" onClick={toggleActive} id={defaultValue} ref={selectRef}>
            <div className="icon">
                <LabelIcon />
            </div>
            <div className="selected_option">
                <input type="hidden" required/>
                <span className="font_inter_semibold">{defaultValue}</span>
            </div>
            <ul className={`drop_options scrollbar ${show ? 'show animate__fadeIn' : ''} ${isClosing ? 'animate__fadeOut' : ''} animate__animated`}>
                {
                    optionsList.map((el, idx) => <SelectOption optionInfo={el} key={idx}/>)
                }
            </ul>
        </div>
    )
}