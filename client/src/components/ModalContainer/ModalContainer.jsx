import { IoIosClose } from 'react-icons/io'
import './modalContainer.css'

export const ModalContainer = ({ modalTitle, children, closeFn, closeSet, isClosing }) => {
    return (
        <div className='modal_container'>
            <div className={`animate__animated animate__fast ${!isClosing ? 'animate__fadeIn' : 'animate__fadeOut'}`}>
                <header>
                    <h2 className="font_poppins_bold">{modalTitle}</h2>
                    <button className="close_modal" onClick={_ => closeFn(null, closeSet, true)}>
                        <IoIosClose />
                    </button>
                </header>
                {children}
            </div>
        </div>
    )
}