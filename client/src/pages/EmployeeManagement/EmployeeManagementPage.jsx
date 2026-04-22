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
    const [isModalClosing, setModalClosing] = useState(false)
    const [isDeletingEmployees, setDeletingEmployees] = useState(false)

    const toggleState = (stateToSet, stateFn, hasCloseEffect) => {
        const useCloseEffect = hasCloseEffect || false // This is necessary because if not 
        if(useCloseEffect && !stateToSet) {
            setModalClosing(true)
            setTimeout(() => {
                setModalClosing(false)
                stateFn(stateToSet)
            }, 750)
            return
        }

        stateFn(stateToSet)
    }

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
                            <button className="font_inter_semibold" onClick={_ => toggleState(true, setAddEmployee)}>
                                <IoIosAddCircleOutline /> Adicionar funcionário
                            </button>
                            <button className="font_inter_semibold" onClick={_ => toggleState(!isDeletingEmployees, setDeletingEmployees)}>
                                {!isDeletingEmployees ? <><IoPersonRemoveSharp /> Remover funcionário</> : "Cancelar"}
                            </button>
                        </div>
                    </div>
                    <ul className="employee_info_list scrollbar">
                        {employeeMock.map((employee, idx) => <EmployeeCard employeeInfo={employee} isDeletingEmployees={isDeletingEmployees} key={idx} />)}
                    </ul>
                </section>
            </div>
            { addEmployeeActive ?
                <ModalContainer modalTitle="Cadastro de Funcionário" closeFn={toggleState} closeSet={setAddEmployee} isClosing={isModalClosing}>
                    <AddEmployeeModal />
                </ModalContainer> : null
            }
        </>
    )
}