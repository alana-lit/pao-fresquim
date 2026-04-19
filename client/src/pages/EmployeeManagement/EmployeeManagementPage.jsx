import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io"
import { IoPersonRemoveSharp } from "react-icons/io5"

import { AddEmployeeModal } from "../../components/Modals/AddEmployeeModal/AddEmployeeModal"
import { EmployeeCard } from "./EmployeeCard/EmployeeCard"
import { ModalContainer } from "../../components/ModalContainer/ModalContainer"
import { SideBar } from "../../components/SideBar/SideBar"

import { employeeMock } from "../../mocks/employeeMock"
import { useState } from "react"

import './employeeManagementPage.css'

export const EmployeeManagementPage = () => {
    const [addEmployeeActive, setAddEmployee] = useState(false)
    const toggleState = (state, stateFn) => stateFn(!state)

    return (
        <>
            <div className="container">
                <SideBar />
                <section>
                    <h1 className="font_poppins_regular">Gestão de funcionários</h1>
                    <div className="employee_overview">
                        <div className="departments_info">
                            <p className="font_poppins_regular">Total de Funcionários: <span>X</span></p>
                            <p className="font_poppins_regular">Quantidade de funcionários por setor:</p>
                            <ul className="scrollbar">
                                <li className="font_inter_semibold round">Padaria: 2</li>
                                <li className="font_inter_semibold round">Caixa: 3</li>
                            </ul>
                        </div>
                        <div className="employee_options">
                            <button className="font_inter_semibold" onClick={_ => toggleState(addEmployeeActive, setAddEmployee)}>
                                <IoIosAddCircleOutline /> Adicionar funcionário
                            </button>
                            <button className="font_inter_semibold">
                                <IoPersonRemoveSharp /> Remover funcionário
                            </button>
                        </div>
                    </div>
                    <ul className="employee_info_list scrollbar">
                        {employeeMock.map((employee, idx) => <EmployeeCard employeeInfo={employee} key={idx} />)}
                    </ul>
                </section>
            </div>
            { addEmployeeActive ?
                <ModalContainer modalTitle="Cadastro de Funcionário" closeFn={toggleState} closeState={addEmployeeActive} closeSet={setAddEmployee}>
                    <AddEmployeeModal />
                </ModalContainer> : null
            }
        </>
    )
}