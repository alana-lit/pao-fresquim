import './addProduct.css'
import { SideBar } from '../../components/SideBar/SideBar.jsx'
import { Input } from '../../components/Input/Input.jsx'
import { MdAttachMoney, MdOutlineAddShoppingCart, MdOutlineNewLabel } from 'react-icons/md'
import { FaBarcode } from 'react-icons/fa'

export const AddProductPage = () => {
    return (
        <div className='page_container'>
            <SideBar />
            <form action="">
                <h1 className="font_poppins_regular">Cadastro de Produtos</h1>
                <div className="input_containers">
                    <Input id="prod_name" placeholder="Nome do Produto" inputType="text" LabelIcon={MdOutlineNewLabel} hasIconAside={true}/>
                    <Input id="bar_code" placeholder="Código de Barras (escanear)" inputType="text" LabelIcon={FaBarcode} hasIconAside={true}/>
                    <Input id="price" placeholder="Valor do Produto" inputType="number" LabelIcon={MdAttachMoney} hasIconAside={true}/>
                </div>
                <button className='font_poppins_bold'>
                    <MdOutlineAddShoppingCart /> Cadastrar produto
                </button>
            </form>
        </div>
    )
}