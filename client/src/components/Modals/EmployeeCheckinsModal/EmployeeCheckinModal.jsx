import { checkinMock } from "../../../mocks/employeeCheckinsMock"
import { CheckinCard } from "./CheckinCard/CheckinCard"

import './employeeCheckinModal.css'

export const EmployeeCheckinModal = ({ employeeId }) => {
    return (
        <ul className="scrollbar checkin_container">
            {checkinMock.map((info, idx) => <CheckinCard info={{...info, 'type': idx % 2 == 0 ? "Entrada" : "Saída"}} key={idx}/>)}
        </ul>
    )
}