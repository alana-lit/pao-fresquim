import { IoIosClose } from 'react-icons/io'
import './modalContainer.css'

export const ModalContainer = ({ modalTitle, children, closeFn, closeSet, isClosing, closeAnimation }) => {
    if(closeAnimation == null) closeAnimation = true

    return (
        <div className='modal_container'>
            <div className={`animate__animated animate__fast animate__fadeIn ${!isClosing ? '' : 'animate__fadeOut'}`}>
                <header>
                    <h2 className="font_poppins_bold">{modalTitle}</h2>
                    <button className="close_modal" onClick={_ => closeFn(null, closeSet, closeAnimation)}>
                        <IoIosClose />
                    </button>
                </header>
                {children}
            </div>
        </div>
    )
}