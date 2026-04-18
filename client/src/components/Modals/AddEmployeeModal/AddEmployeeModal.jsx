import { GrUserWorker } from 'react-icons/gr'
import { MdLocalPhone } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'
import { IoWarning } from 'react-icons/io5'

import { Input } from '../../Input/Input.jsx'
import { Select } from '../../Select/Select.jsx'

import './addEmployeeModal.css'

export const AddEmployeeModal = () => {
    return (
        <form className='employee_modal'>
            <Input id="emp_name" placeholder="Nome do Funcionário" inputType="text" hasIconAside={true} LabelIcon={GrUserWorker} />
            <Input id="contact" placeholder="Contato" inputType="number" hasIconAside={true} LabelIcon={MdLocalPhone} />
            <Select LabelIcon={IoMdArrowDropdown} defaultValue="Cargo" optionsList={[{'optionLabel': 'BLABLA', 'optionValue': 'LELE'}, {'optionLabel': 'BLABLA2', 'optionValue': 'LELE2'}]} acceptsDefault={false}/>
            <Input id="address" placeholder="Endereço" inputType="text" hasIconAside={true} LabelIcon={FaHouse} />
            <Input id="emergContact" placeholder="Contato de Emergência" inputType="number" hasIconAside={true} LabelIcon={IoWarning} />
            <button className='font_inter_semibold'>
                Cadastrar
            </button>
        </form>
    )
}