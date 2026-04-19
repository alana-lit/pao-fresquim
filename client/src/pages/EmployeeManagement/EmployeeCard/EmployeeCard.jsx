import './employeeCard.css'

export const EmployeeCard = ({ employeeInfo }) => {
    return (
        <li className="card_container">
            <div className="info_container">
                <p className="font_inter_semibold employee_name">{employeeInfo.name}</p>
                <p className="font_inter_regular">Tempo de empresa: {employeeInfo.contractDuration}</p>
                <p className="font_inter_regular">Endereço: {employeeInfo.address}</p>
                <p className="font_inter_regular">Contato: {employeeInfo.contact}</p>
                <p className="font_inter_regular">Contato de emergência: {employeeInfo.emergencyContact}</p>
            </div>
            <div className="options_container">
                <button className="round">Atestados e Licenças</button>
                <button className="round">Histórico de Pontos</button>
                <button className="round">Atualizar Informações</button>
            </div>
        </li>
    )
}