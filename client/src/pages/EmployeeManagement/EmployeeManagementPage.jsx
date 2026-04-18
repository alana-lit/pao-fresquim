import { ModalContainer } from "../../components/ModalContainer/ModalContainer"
import { AddEmployeeModal } from "../../components/Modals/AddEmployeeModal/AddEmployeeModal"
import { SideBar } from "../../components/SideBar/SideBar"

export const EmployeeManagementPage = () => {
    return (
        <>
            <div>
                <SideBar />
                <ModalContainer modalTitle="Cadastrar funcionário">
                    <AddEmployeeModal />
                </ModalContainer>
            </div>
        </>
    )
}