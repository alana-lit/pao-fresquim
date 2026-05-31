import './selectOption.css'

export const SelectOption = ({ option, setValue }) => {
    return (
        <li className='li_option' onClick={() => setValue(option)}>
            <span id={option} className='font_inter_semibold'>{option}</span>
        </li>
    )
}