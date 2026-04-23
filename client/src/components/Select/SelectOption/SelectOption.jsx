import './selectOption.css'

export const SelectOption = ({ optionInfo }) => {
    const { optionLabel, optionValue } = optionInfo

    return (
        <li className='li_option'>
            <span id={optionValue} className='font_inter_semibold'>{optionLabel}</span>
        </li>
    )
}