import { IoIosClose } from 'react-icons/io'
import './modalContainer.css'

export const ModalContainer = ({ modalTitle, children }) => {
    return (
        <div className='modal_container'>
            <div>
                <header>
                    <h2 className="font_poppins_bold">{modalTitle}</h2>
                    <button className="close_modal">
                        <IoIosClose />
                    </button>
                </header>
                {children}
            </div>
        </div>
    )
}