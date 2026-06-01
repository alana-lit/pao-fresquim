import { GrUserWorker } from 'react-icons/gr'
import { MdLocalPhone, MdOutlineAttachMoney } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'
import { IoWarning } from 'react-icons/io5'
import { HiIdentification } from "react-icons/hi"
import { MdAlternateEmail } from "react-icons/md"
import { GoLaw } from "react-icons/go"
import { CiCalendarDate } from 'react-icons/ci'
import { PiIdentificationBadge } from 'react-icons/pi'
import { FaHandsHelping } from 'react-icons/fa'

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
            <Input id="emp_name" placeholder="Nome do Funcionário" inputType="text" hasIconAside={true} LabelIcon={GrUserWorker} defaultValue={employee?.nome} />
            <Input id="emp_cpf" placeholder="CPF" inputType="text" hasIconAside={true} LabelIcon={HiIdentification} defaultValue={employee?.cpf} />
            <Input id="emp_contact" placeholder="Contato" inputType="phone" hasIconAside={true} LabelIcon={MdLocalPhone} defaultValue={employee?.telefone} />
            <Input id="emp_email" placeholder="E-mail" inputType="text" hasIconAside={true} LabelIcon={MdAlternateEmail} defaultValue={employee?.email} />
            <Select LabelIcon={IoMdArrowDropdown} optionsList={["Atendente", "Padeiro"]} acceptsDefault={true} defaultValue={employee?.cargo} />
            <Input id="emp_hireDate" placeholder="Data de contratação" inputType="date" hasIconAside={true} LabelIcon={CiCalendarDate} defaultValue={employee?.dataContratacao} />
            <Input id="emp_salary" placeholder="Salário" inputType="number" hasIconAside={true} LabelIcon={MdOutlineAttachMoney} defaultValue={employee?.salario} />
            <Input id="emp_pisPasep" placeholder="PIS pasep" inputType="number" hasIconAside={true} LabelIcon={GoLaw} defaultValue={employee?.pisPasep} />
            <Input id="emp_hash" placeholder="Matrícula" inputType="number" hasIconAside={true} LabelIcon={PiIdentificationBadge} defaultValue={employee?.matricula} />
            <Input id="emp_nameEmergContact" placeholder="Nome contato emergência" inputType="text" hasIconAside={true} LabelIcon={FaHandsHelping} defaultValue={employee?.nomeContatoEmergencia} />
            <Input id="emp_emergContact" placeholder="Contato de Emergência" inputType="phone" hasIconAside={true} LabelIcon={IoWarning} defaultValue={employee?.contatoEmergencia} />
            <button className='font_inter_semibold'>
                Atualizar informações
            </button>
        </form>
    )
}