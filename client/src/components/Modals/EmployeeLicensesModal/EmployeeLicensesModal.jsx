import { employeeLicensesMock } from '../../../mocks/employeeLicensesMock'

import './employeeLicensesModal.css'
import { LicenseCard } from './LicenseCard/LicenseCard'

export const EmployeeLicensesModal = ({ employeeId }) => {
    return (
        <div className="employee__licenses--container">
            <ul className='scrollbar'>
                {employeeLicensesMock.map((info, idx) => <LicenseCard info={info} key={idx}/>)}
            </ul>
            <button className='font_inter_semibold brown'>Adicionar atestado</button>
            <button className='font_inter_semibold red'>Excluir atestado</button>
        </div>
    )
}