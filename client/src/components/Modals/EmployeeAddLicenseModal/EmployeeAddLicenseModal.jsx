import { CiCalendar, CiImageOn, CiStickyNote } from "react-icons/ci"
import { Input } from "../../Input/Input"

import { useState } from "react"

import { processPayload } from "../../../utils/requests"

import './employeeAddLicenseModal.css'

export const EmployeeAddLicenseModal = ({ employeeHash }) => {
    const [fileName, setFileName] = useState("Escolher arquivo")
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const _toBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
    
                reader.readAsDataURL(file)
    
                reader.onload = () => resolve(reader.result)
                reader.onerror = reject
            })
        }

        function base64ToFile(base64, fileName) {
            const arr = base64.split(',')
            const mime = arr[0].match(/:(.*?);/)[1]
            const bstr = atob(arr[1])

            let n = bstr.length
            const u8arr = new Uint8Array(n)

            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }

            return new File([u8arr], fileName, { type: mime })
        }

        const file = e.target.children[3].files[0]
        const schema = {
            "licenseIdentification": {"type": "string", "alias": "nome"},
            "licenseStartDate": {"type": "date", "alias": "dataInicio"},
            "licenseEndDate": {"type": "date", "alias": "dataFim"}
        }
        const payload = processPayload("form.add_license_form", schema)
        const base64 = await _toBase64(file)
        const fullPayload = {"matricula": employeeId, ...payload, "arquivo": base64}
        
        const BASE_URL = import.meta.env.VITE_DB_URL
        const response = await fetch(`${BASE_URL}/atestado`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fullPayload)
        })

        const data = await response.json()
    }

    return (
        <form className="add_license_form" onSubmit={handleSubmit}>
            <Input id="licenseIdentification" placeholder="Identificação do atestado" inputType="text" hasIconAside={true} LabelIcon={CiStickyNote} />
            <Input id="licenseStartDate" placeholder="Data de início" inputType="date" hasIconAside={true} LabelIcon={CiCalendar} />
            <Input id="licenseEndDate" placeholder="Data de fim" inputType="date" hasIconAside={true} LabelIcon={CiCalendar} />
            <input id="licenseFile" type="file" hidden onChange={(e) => setFileName(e.target.value)} />
            <label htmlFor="licenseFile" className="font_inter_regular">
                <CiImageOn />
                {fileName}
            </label>
            <button className="font_inter_semibold">Registrar atestado</button>
        </form>
    )
}