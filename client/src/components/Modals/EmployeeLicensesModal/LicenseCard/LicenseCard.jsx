import { CiCircleRemove } from 'react-icons/ci'
import './licenseCard.css'

export const LicenseCard = ({ info, isDeletingLicense }) => {
    const licenseDate = new Date(info.dataInicio)
    return (
        <li className='license__card--container'>
            <p className="font_inter_regular">Data: {`${licenseDate.getDate()}/${String(licenseDate.getMonth() + 1).padStart(2, "0")}/${licenseDate.getFullYear()}`}</p>
            <button className='font_inter_semibold'>Acessar atestado</button>

            { isDeletingLicense ?
            <div className={`deleting_on animate__animated animate__fadeIn animate__faster`}>
                <CiCircleRemove />
            </div> : null
            }
        </li>
    )
}