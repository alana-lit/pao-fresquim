import { IoIosClose } from 'react-icons/io'
import Swal from 'sweetalert2'

import './modalContainer.css'

export const ModalContainer = ({ modalTitle, children, closeFn, closeSet, isClosing, closeAnimation, confirmBeforeClose }) => {
    if(closeAnimation == null) closeAnimation = true

    const handleClose = (_) => {
        if(!confirmBeforeClose) return closeFn(null, closeSet, closeAnimation)

        Swal.fire({
            title: "Tem certeza que deseja sair?",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Sim, quero sair",
            cancelButtonText: "Não, quero voltar",
            customClass: {
                confirmButton: "font_inter_regular",
                closeButton: "font_inter_regular",
                title: "font_inter_semibold"
            }
        }).then(
            res => {
                if(res.isConfirmed) return closeFn(null, closeSet, closeAnimation)
            }
        )
    }

    return (
        <div className='modal_container'>
            <div className={`animate__animated animate__fast animate__fadeIn ${!isClosing ? '' : 'animate__fadeOut'}`}>
                <header>
                    <h2 className="font_poppins_bold">{modalTitle}</h2>
                    <button className="close_modal" onClick={handleClose}>
                        <IoIosClose />
                    </button>
                </header>
                {children}
            </div>
        </div>
    )
}