import { CiImageOn } from "react-icons/ci"
import { Input } from "../../Input/Input"

import './employeeAddLicenseModal.css'
import { useState } from "react"

export const EmployeeAddLicenseModal = ({ employeeId }) => {
    const [fileName, setFileName] = useState("Escolher arquivo")
    
    const handleSubmit = async (e) => {
        const _toBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
    
                reader.readAsDataURL(file)
    
                reader.onload = () => resolve(reader.result)
                reader.onerror = reject
            })
        }
        e.preventDefault()
        
        const file = e.target[0].files[0]

        const base64 = await _toBase64(file)
        console.log(base64)
    }

    return (
        <form className="add_license_form" onSubmit={handleSubmit}>
            <Input placeholder="Nome" />
            <input id="addLicenseInput" type="file" hidden onChange={(e) => setFileName(e.target.value)} />
            <label htmlFor="addLicenseInput" className="font_inter_regular">
                <CiImageOn />
                {fileName}
            </label>
            <button className="font_inter_semibold">Registrar atestado</button>
        </form>
    )
}