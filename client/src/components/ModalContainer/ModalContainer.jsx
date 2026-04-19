import { IoIosClose } from 'react-icons/io'
import './modalContainer.css'

export const ModalContainer = ({ modalTitle, children, closeFn, closeState, closeSet }) => {
    return (
        <div className='modal_container'>
            <div>
                <header>
                    <h2 className="font_poppins_bold">{modalTitle}</h2>
                    <button className="close_modal" onClick={_ => closeFn(closeState, closeSet)}>
                        <IoIosClose />
                    </button>
                </header>
                {children}
            </div>
        </div>
    )
}