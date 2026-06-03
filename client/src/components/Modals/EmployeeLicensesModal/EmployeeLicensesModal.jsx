import { useEffect, useState } from 'react'
import { LicenseCard } from './LicenseCard/LicenseCard'

import './employeeLicensesModal.css'

export const EmployeeLicensesModal = ({ employeeInfo: { employeeId, employeeHash }, addingLicense, openFn }) => {
    const [employeeLicenses, setEmployeeLicenses] = useState([])
    const [deletingLicense, setDeletingLicense] = useState(false)

    useEffect(() => {
        console.log(employeeId, employeeHash);
        
        const BASE_URL = import.meta.env.VITE_DB_URL
        const handleGetLicenses = async () => {
            const response = await fetch(`${BASE_URL}/atestado/${employeeId}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()

            setEmployeeLicenses(data)
        }

        handleGetLicenses()
    }, [])

    return (
        <div className="employee__licenses--container">
            <ul className='scrollbar'>
                {employeeLicenses.map((info, idx) => <LicenseCard info={info} isDeletingLicense={deletingLicense} key={idx} />)}
            </ul>
            <button className='font_inter_semibold brown' onClick={(_) => openFn(true, addingLicense, false)}>Adicionar atestado</button>
            <button className='font_inter_semibold red' onClick={(_) => setDeletingLicense(!deletingLicense)}>{!deletingLicense ? "Excluir atestado" : "Cancelar"}</button>
        </div>
    )
}