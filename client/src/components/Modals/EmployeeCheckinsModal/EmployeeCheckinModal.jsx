import { CiCalendarDate } from "react-icons/ci"

import { checkinMock } from "../../../mocks/employeeCheckinsMock"
import { CheckinCard } from "./CheckinCard/CheckinCard"
import { Input } from "../../Input/Input"

import './employeeCheckinModal.css'

export const EmployeeCheckinModal = ({ employeeId }) => {
    return (
        <div className="checkin_container">
            <ul className="scrollbar ">
                {checkinMock.map((info, idx) => <CheckinCard info={{...info, 'type': idx % 2 == 0 ? "Entrada" : "Saída"}} key={idx}/>)}
            </ul>
            <Input LabelIcon={CiCalendarDate} hasIconAside={true} inputType="date" id="dateFilter" />
        </div>
    )
}