import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io"
import { IoPersonRemoveSharp } from "react-icons/io5"

import { AddEmployeeModal } from "../../components/Modals/AddEmployeeModal/AddEmployeeModal"
import { EmployeeCard } from "./EmployeeCard/EmployeeCard"
import { UpdateEmployeeModal } from "../../components/Modals/UpdateEmployeeModal/UpdateEmployeeModal"
import { ModalContainer } from "../../components/ModalContainer/ModalContainer"
import { SideBar } from "../../components/SideBar/SideBar"

import { employeeMock } from "../../mocks/employeeMock"
import { useState } from "react"

import './employeeManagementPage.css'
import { EmployeeCheckinModal } from "../../components/Modals/EmployeeCheckinsModal/EmployeeCheckinModal"
import { EmployeeLicensesModal } from "../../components/Modals/EmployeeLicensesModal/EmployeeLicensesModal"

export const EmployeeManagementPage = () => {
    const [addEmployeeActive, setAddEmployee] = useState(false)
    const [isModalClosing, setModalClosing] = useState(false)
    const [isDeletingEmployees, setDeletingEmployees] = useState(false)
    const [seeLicense, setSeeLicense] = useState(false)
    const [seeLogs, setSeeLogs] = useState(null)
    const [updateEmployee, setUpdateEmployee] = useState(false)
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
    const selectedEmployee = employeeMock.find(employee => employee.id === selectedEmployeeId)
    

    const toggleState = (stateToSet, stateFn, hasCloseEffect) => {
        const useCloseEffect = hasCloseEffect || false // This is necessary because if not (i left it unfinished and now idk why it is necessary HAAHAHHAHAHAHH)
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
                        {employeeMock.map((employee, idx) => <EmployeeCard employeeInfo={employee} isDeletingEmployees={isDeletingEmployees} key={idx} setCheckins={setSeeLogs} openFn={toggleState} setLicenses={setSeeLicense} setUpdateEmployee={setUpdateEmployee} setSelectedEmployeeId={setSelectedEmployeeId}/>)}
                    </ul>
                </section>
            </div>
            { addEmployeeActive ?
                <ModalContainer modalTitle="Cadastro de Funcionário" closeFn={toggleState} closeSet={setAddEmployee} isClosing={isModalClosing}>
                    <AddEmployeeModal />
                </ModalContainer> : null
            }
             { updateEmployee ?
                <ModalContainer modalTitle="Atualizar informações de (-)" closeFn={toggleState} closeSet={setUpdateEmployee} isClosing={isModalClosing}>
                    <UpdateEmployeeModal employee={selectedEmployee}/>
                </ModalContainer> : null
            }
            {
                seeLicense ? 
                <ModalContainer modalTitle="Licenças e atestados" closeFn={toggleState} closeSet={setSeeLicense} isClosing={isModalClosing} >
                    <EmployeeLicensesModal employeeId={seeLicense} />
                </ModalContainer> : null
            }
            {
                seeLogs != null ?
                <ModalContainer modalTitle="Histórico de pontos" closeFn={toggleState} closeSet={setSeeLogs} isClosing={isModalClosing} >
                    <EmployeeCheckinModal employeeId={seeLogs} />
                </ModalContainer> : null
            }
        </>
    )
}