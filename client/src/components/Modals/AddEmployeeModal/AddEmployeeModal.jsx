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

import './addEmployeeModal.css'
import Swal from 'sweetalert2'

const _AUX = {
    "emp_name": "nome",
    "emp_cpf": "cpf",
    "emp_contact": "telefone",
    "emp_email": "email",
    "emp_hireDate": "dataContratacao",
    "emp_salary": "salario",
    "emp_pisPasep": "pisPasep",
    "emp_hash": "matricula",
    "emp_nameEmergContact": "nomeContatoEmergencia",
    "emp_emergContact": "contatoEmergencia"
}

export const AddEmployeeModal = ({ employeeList, setEmployeeList, handleEmployeeSectorStatistics }) => {
    const handleCreateEmployee = async (e) => {
        e.preventDefault()

        const BASE_URL = import.meta.env.VITE_DB_URL
        const form = document.querySelector("form.employee_modal")

        const payload = {}
        for(const el of form.children) {
            if(el.tagName == "BUTTON") continue
            if(el.children[1].tagName != "INPUT") {
                payload["cargo"] = document.querySelector("div.selected_option>input").value
                continue
            }

            const input = el.children[1]
            let value = input.value

            if(input.id == "emp_salary") {
                value = Number.parseFloat(value)
            } else if(input.id == "emp_hash") {
                value = Number.parseInt(value)
            }

            payload[
                _AUX[input.id]
            ] = value
        }

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