import { CiImageOn } from "react-icons/ci"
import { Input } from "../../Input/Input"

import './employeeAddLicenseModal.css'

export const EmployeeAddLicenseModal = ({ employeeId }) => {
    return (
        <form className="add_license_form">
            <input id="addLicenseInput" type="file" hidden />
            <label htmlFor="addLicenseInput" className="font_inter_regular">
                <CiImageOn />
                Escolher arquivo
            </label>
            <button className="font_inter_semibold">Registrar atestado</button>
        </form>
    )
}