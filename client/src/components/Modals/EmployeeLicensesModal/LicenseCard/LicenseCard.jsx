import './licenseCard.css'

export const LicenseCard = ({ info }) => {
    return (
        <li className='license__card--container'>
            <p className="font_inter_regular">Data: {`${info.date.getDay()}/${info.date.getMonth()}/${info.date.getFullYear()}`}</p>
            <button className='font_inter_semibold'>Acessar atestado</button>
        </li>
    )
}