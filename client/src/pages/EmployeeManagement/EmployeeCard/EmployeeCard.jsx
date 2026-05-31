import { CiCircleRemove } from 'react-icons/ci'

import './employeeCard.css'

export const EmployeeCard = ({ employeeInfo, isDeletingEmployees, setCheckins, openFn, setLicenses, setUpdateEmployee, setSelectedEmployeeId, addingLicense, deleteEmployee }) => {
    return (
        <li className="card_container">
            <div className={`deleting_on animate__animated animate__fadeIn animate__faster ${isDeletingEmployees ? 'active' : ''}`} onClick={() => deleteEmployee(employeeInfo.id)}>
                <CiCircleRemove />
            </div>
            <div className="info_container">
                <p className="font_inter_semibold employee_name">{employeeInfo.nome}</p>
                <p className="font_inter_regular">Cargo: {employeeInfo.cargo}</p>
                <p className="font_inter_regular">Data de contratação: {employeeInfo.dataContratacao}</p>
                <p className="font_inter_regular">E-mail: {employeeInfo.email}</p>
                <p className="font_inter_regular">Contato: {employeeInfo.telefone}</p>
                <p className="font_inter_regular">Nome contato emergência: {employeeInfo.nomeContatoEmergencia}</p>
                <p className="font_inter_regular">Contato de emergência: {employeeInfo.contatoEmergencia}</p>
                <p className="font_inter_regular">Salario: R$ {employeeInfo.salario}</p>
                <p className="font_inter_regular">PIS: {employeeInfo.pisPasep}</p>
            </div>
            <div className="options_container">
                <button className="round" onClick={(_) => openFn(employeeInfo.id, setLicenses, true)}>Atestados e Licenças</button>
                <button className="round" onClick={(_) => openFn(employeeInfo.id, setCheckins, true)}>Histórico de Pontos</button>
               <button className="round" onClick={(_) => {openFn(employeeInfo.id, setSelectedEmployeeId, true); openFn(true, setUpdateEmployee, true)}}> Atualizar Informações</button>
            </div>
        </li>
    )
}