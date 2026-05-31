import { GrUserWorker } from 'react-icons/gr'
import { MdLocalPhone } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'
import { IoWarning } from 'react-icons/io5'

import { useEffect, useState } from 'react'

import { Input } from '../../Input/Input.jsx'
import { Select } from '../../Select/Select.jsx'

import './updateEmployeeModal.css'

export const UpdateEmployeeModal = ({ employeeId }) => {
    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        const BASE_URL = import.meta.env.VITE_DB_URL
        const handleGetEmployee = async () => {
            const response = await fetch(`${BASE_URL}/funcionario/id/${employeeId}`, {
                method: "GET"
            })
            const data = await response.json()
            setEmployee(data)
        }

        handleGetEmployee()
    }, [])

    return (
        <form className='employee_modal'>
            <Input id="emp_name" placeholder="Nome do Funcionário" inputType="text" hasIconAside={true} LabelIcon={GrUserWorker} defaultValue={employee?.nome}/>
            <Input id="contact" placeholder="Contato" inputType="number" hasIconAside={true} LabelIcon={MdLocalPhone} defaultValue={employee?.telefone} />
            <Select LabelIcon={IoMdArrowDropdown} defaultValue="Cargo" optionsList={["Atendente", "Padeiro"]} acceptsDefault={false} />
            <Input id="emergContact" placeholder="Contato de Emergência" inputType="number" hasIconAside={true} LabelIcon={IoWarning} defaultValue={employee?.contatoEmergencia}/>
            <button className='font_inter_semibold'>
                Atualizar informações
            </button>
        </form>
    )
}