import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io"
import { IoPersonRemoveSharp } from "react-icons/io5"

import { AddEmployeeModal } from "../../components/Modals/AddEmployeeModal/AddEmployeeModal"
import { UpdateEmployeeModal } from "../../components/Modals/UpdateEmployeeModal/UpdateEmployeeModal"
import { ModalContainer } from "../../components/ModalContainer/ModalContainer"
import { EmployeeCheckinModal } from "../../components/Modals/EmployeeCheckinsModal/EmployeeCheckinModal"
import { EmployeeLicensesModal } from "../../components/Modals/EmployeeLicensesModal/EmployeeLicensesModal"
import { EmployeeAddLicenseModal } from "../../components/Modals/EmployeeAddLicenseModal/EmployeeAddLicenseModal"

import { SideBar } from "../../components/SideBar/SideBar"
import { EmployeeCard } from "./EmployeeCard/EmployeeCard"

import { useEffect, useState } from "react"

import Swal from "sweetalert2"

import './employeeManagementPage.css'

export const EmployeeManagementPage = () => {
    const [addEmployeeActive, setAddEmployee] = useState(false)
    const [isModalClosing, setModalClosing] = useState(false)
    const [isDeletingEmployees, setDeletingEmployees] = useState(false)
    const [seeLicense, setSeeLicense] = useState(null)
    const [addingLicense, setAddingLicense] = useState(false)
    const [seeLogs, setSeeLogs] = useState(null)
    const [updateEmployee, setUpdateEmployee] = useState(false)
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)

    const [employeeList, setEmployeeList] = useState([])
    useEffect(() => {
        const BASE_URL = import.meta.env.VITE_DB_URL
        const handleGetEmployees = async () => {
            const response = await fetch(`${BASE_URL}/funcionario`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()

            setEmployeeList(data)
            handleEmployeeSectorStatistics(data)
        }

        handleGetEmployees()
    }, [])

    const handleEmployeeSectorStatistics = (employeeList) => {
        const ul = document.querySelector('ul.employeeSectorStatistics')
        ul.innerHTML = ""

        const statistics = {}
        for(let employee of employeeList) {
            if(!(employee.cargo in statistics)) {
                statistics[employee.cargo] = 1
                continue
            }

            statistics[employee.cargo]++
        }

        const totalEmployees = employeeList.length > 0 ? Object.values(statistics).reduce((acc, total) => acc + total) : 0

        document.querySelector("span.spanNumEmployee").innerText = totalEmployees
        for(const sectorInfo in statistics) {
            const li = document.createElement("li")
            li.innerText = `${sectorInfo}: ${statistics[sectorInfo]}`
            li.className = "font_inter_semibold round"

            ul.appendChild(li)
        }
    }

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

    const deleteEmployee = (employeeId) => {
        const BASE_URL = import.meta.env.VITE_DB_URL
        const handleDeleteEmployees = async () => {
            const response = await fetch(`${BASE_URL}/funcionario/${employeeId}`, {
                method: "DELETE"
            })

            if(response.status != 204) {
                Swal.fire({
                    title: "Não foi possível excluir o funcionário!",
                    text: "Por favor, aguarde um momento e tente novamente ou entre em contato com nossa equipe para que possamos melhor lhe atender.",
                    icon: "error"
                })
                return
            }
            
            const newEmployeeList = employeeList.filter(employee => employee.id != employeeId)
            
            setEmployeeList(newEmployeeList)
            handleEmployeeSectorStatistics(newEmployeeList)

            Swal.fire({
                title: "Funcionário excluído com sucesso!",
                text: "O funcionário não aparecerá mais na lista de funcionários.",
                icon: "success"
            })
        }

        handleDeleteEmployees()
    }

    return (
        <>
            <div className="container">
                <SideBar />
                <section>
                    <h1 className="font_poppins_regular">Gestão de funcionários</h1>
                    <div className="employee_overview">
                        <div className="departments_info">
                            <p className="font_poppins_regular">Total de Funcionários: <span className="spanNumEmployee">X</span></p>
                            <p className="font_poppins_regular">Quantidade de funcionários por setor:</p>
                            <ul className="scrollbar employeeSectorStatistics">
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
                        {employeeList.map((employee, idx) => <EmployeeCard employeeInfo={employee} isDeletingEmployees={isDeletingEmployees} key={idx} setCheckins={setSeeLogs} openFn={toggleState} setLicenses={setSeeLicense} setUpdateEmployee={setUpdateEmployee} setSelectedEmployeeId={setSelectedEmployeeId} deleteEmployee={deleteEmployee} />)}
                    </ul>
                </section>
            </div>
            { addEmployeeActive ?
                <ModalContainer modalTitle="Cadastro de Funcionário" closeFn={toggleState} closeSet={setAddEmployee} isClosing={isModalClosing} confirmBeforeClose={true}>
                    <AddEmployeeModal employeeList={employeeList} setEmployeeList={setEmployeeList} handleEmployeeSectorStatistics={handleEmployeeSectorStatistics} />
                </ModalContainer> : null
            }
            { selectedEmployeeId ?
                <ModalContainer modalTitle="Atualizar informações" closeFn={toggleState} closeSet={setSelectedEmployeeId} isClosing={isModalClosing} confirmBeforeClose={true}>
                    <UpdateEmployeeModal employeeId={selectedEmployeeId} employeeList={employeeList} setEmployeeList={setEmployeeList} handleEmployeeSectorStatistics={handleEmployeeSectorStatistics}/>
                </ModalContainer> : null
            }
            {
                seeLicense != null ?
                <ModalContainer modalTitle="Licenças e atestados" closeFn={toggleState} closeSet={setSeeLicense} isClosing={isModalClosing} >
                    <EmployeeLicensesModal employeeId={seeLicense} addingLicense={setAddingLicense} openFn={toggleState} />
                </ModalContainer> : null
            }
            {
                seeLogs != null ?
                <ModalContainer modalTitle="Histórico de pontos" closeFn={toggleState} closeSet={setSeeLogs} isClosing={isModalClosing} >
                    <EmployeeCheckinModal employeeId={seeLogs} />
                </ModalContainer> : null
            }
            {
                addingLicense ?
                <ModalContainer modalTitle="Adicionar atestado" closeFn={toggleState} closeSet={setAddingLicense} isClosing={isModalClosing} closeAnimation={false}>
                    <EmployeeAddLicenseModal employeeId={seeLicense} />
                </ModalContainer> : null
            }
        </>
    )
}