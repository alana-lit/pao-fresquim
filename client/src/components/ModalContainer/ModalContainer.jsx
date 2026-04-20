import { IoIosClose } from 'react-icons/io'
import './modalContainer.css'

export const ModalContainer = ({ modalTitle, children, closeFn, closeSet, isClosing }) => {
    return (
        <div className='modal_container'>
            <div className={`animate__animate animate__bounceIn ${!isClosing ? '' : 'animate__bounceOut'}`}>
                <header>
                    <h2 className="font_poppins_bold">{modalTitle}</h2>
                    <button className="close_modal" onClick={_ => closeFn(false, closeSet)}>
                        <IoIosClose />
                    </button>
                </header>
                {children}
            </div>
        </div>
    )
}