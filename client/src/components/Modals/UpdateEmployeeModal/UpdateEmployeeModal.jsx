import { GrUserWorker } from 'react-icons/gr'
import { MdLocalPhone } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaHouse } from 'react-icons/fa6'
import { IoWarning } from 'react-icons/io5'

import { Input } from '../../Input/Input.jsx'
import { Select } from '../../Select/Select.jsx'

import './updateEmployeeModal.css'

export const UpdateEmployeeModal = ({ employee }) => {
    return (
        <form className='employee_modal'>
            <Input id="emp_name" placeholder="Nome do Funcionário" inputType="text" hasIconAside={true} LabelIcon={GrUserWorker} defaultValue={employee?.name}/>
            <Input id="contact" placeholder="Contato" inputType="number" hasIconAside={true} LabelIcon={MdLocalPhone} defaultValue={employee?.contact} />
            <Select LabelIcon={IoMdArrowDropdown} defaultValue="Cargo" optionsList={[]} acceptsDefault={false} />
            <Input id="address" placeholder="Endereço" inputType="text" hasIconAside={true} LabelIcon={FaHouse} defaultValue={employee?.address} />
            <Input id="emergContact" placeholder="Contato de Emergência" inputType="number" hasIconAside={true} LabelIcon={IoWarning} defaultValue={employee?.emergencyContact}/>
            <button className='font_inter_semibold'>
                Atualizar informações
            </button>
        </form>
    )
}