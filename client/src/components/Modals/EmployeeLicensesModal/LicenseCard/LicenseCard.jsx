import { CiCircleRemove } from 'react-icons/ci'
import './licenseCard.css'

export const LicenseCard = ({ info, isDeletingLicense }) => {
    return (
        <li className='license__card--container'>
            <p className="font_inter_regular">Data: {`${info.date.getDay()}/${info.date.getMonth()}/${info.date.getFullYear()}`}</p>
            <button className='font_inter_semibold'>Acessar atestado</button>

            { isDeletingLicense ?
            <div className={`deleting_on animate__animated animate__fadeIn animate__faster`}>
                <CiCircleRemove />
            </div> : null
            }
        </li>
    )
}