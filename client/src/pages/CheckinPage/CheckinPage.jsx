import { SideBar } from "../../components/SideBar/SideBar"
import Swal from "sweetalert2"

import './checkinPage.css'

export const CheckinPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        Swal.fire({
            title: "Sucesso!",
            icon: "success",
            toast: true,
            position: "top-right",
            timer: 4000,
            showConfirmButton: false,
            customClass: {
                title: "font_inter_regular"
            }
        })
    }

    return (
        <div className="checkin_page_container">
            <SideBar />
            <form onSubmit={handleSubmit}>
                <button className="font_inter_semibold">Bater ponto</button>
            </form>
        </div>
    )
}