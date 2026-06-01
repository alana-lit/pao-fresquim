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

import { Input } from '../../Input/Input.jsx'
import { Select } from '../../Select/Select.jsx'

import { processPayload } from '../../../utils/requests.js'

import './addEmployeeModal.css'
import Swal from 'sweetalert2'

export const AddEmployeeModal = ({ employeeList, setEmployeeList, handleEmployeeSectorStatistics }) => {
    const handleCreateEmployee = async (e) => {
        e.preventDefault()

        const schema = {
            "emp_name": {"type": "string", "alias": "nome"},
            "emp_cpf": {"type": "string", "alias": "cpf"},
            "emp_contact": {"type": "string", "alias": "telefone"},
            "emp_email": {"type": "string", "alias": "email"},
            "select1": {"type": "string", "alias": "cargo"},
            "emp_hireDate": {"type": "string", "alias": "dataContratacao"},
            "emp_salary": {"type": "float", "alias": "salario"},
            "emp_pisPasep": {"type": "string", "alias": "pisPasep"},
            "emp_hash": {"type": "int", "alias": "matricula"},
            "emp_nameEmergContact": {"type": "string", "alias": "nomeContatoEmergencia"},
            "emp_emergContact": {"type": "string", "alias": "contatoEmergencia"}
        }
        const payload = processPayload("form.employee_modal", schema)

        const BASE_URL = import.meta.env.VITE_DB_URL
        const response = await fetch(`${BASE_URL}/funcionario`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if(response.status != 201) {
            Swal.fire({
                title: "Não foi possível cadastrar o funcionário!",
                text: "Tente novamente mais tarde ou entre em contato conosco para melhor lhe atender.",
                icon: "error"
            })
            return
        }

        const data = await response.json()

        setEmployeeList([...employeeList, data])
        Swal.fire({
            title: "Funcionário cadastrado com sucesso!",
            text: "A conta do funcionário já está ativa e o funcionário aparecerá na lista de funcionários em até 1 hora.",
            icon: "success"
        })

        handleEmployeeSectorStatistics([...employeeList, data])
    }

    return (
        <form className='employee_modal scrollbar' onSubmit={(e) => handleCreateEmployee(e)}>
            <Input id="emp_name" placeholder="Nome do Funcionário" inputType="text" hasIconAside={true} LabelIcon={GrUserWorker} />
            <Input id="emp_cpf" placeholder="CPF" inputType="text" hasIconAside={true} LabelIcon={HiIdentification} />
            <Input id="emp_contact" placeholder="Contato" inputType="phone" hasIconAside={true} LabelIcon={MdLocalPhone} />
            <Input id="emp_email" placeholder="E-mail" inputType="text" hasIconAside={true} LabelIcon={MdAlternateEmail} />
            <Select LabelIcon={IoMdArrowDropdown} defaultValue="Cargo" optionsList={["Padeiro", "Atendente"]} acceptsDefault={false}/>
            <Input id="emp_hireDate" placeholder="Data de contratação" inputType="date" hasIconAside={true} LabelIcon={CiCalendarDate} />
            <Input id="emp_salary" placeholder="Salário" inputType="number" hasIconAside={true} LabelIcon={MdOutlineAttachMoney} />
            <Input id="emp_pisPasep" placeholder="PIS pasep" inputType="number" hasIconAside={true} LabelIcon={GoLaw} />
            <Input id="emp_hash" placeholder="Matrícula" inputType="number" hasIconAside={true} LabelIcon={PiIdentificationBadge} />
            <Input id="emp_nameEmergContact" placeholder="Nome contato emergência" inputType="text" hasIconAside={true} LabelIcon={FaHandsHelping} />
            <Input id="emp_emergContact" placeholder="Contato de Emergência" inputType="phone" hasIconAside={true} LabelIcon={IoWarning} />
            <button className='font_inter_semibold'>
                Cadastrar
            </button>
        </form>
    )
}