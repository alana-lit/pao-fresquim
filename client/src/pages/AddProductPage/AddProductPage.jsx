import './addProduct.css'
import { SideBar } from '../../components/SideBar/SideBar.jsx'
import { Input } from '../../components/Input/Input.jsx'
import { MdAttachMoney, MdDateRange, MdOutlineAddShoppingCart, MdOutlineDescription, MdOutlineNewLabel } from 'react-icons/md'
import { FaBarcode } from 'react-icons/fa'
import { LiaInfoSolid } from 'react-icons/lia'
import { TbMoodSick } from 'react-icons/tb'

export const AddProductPage = () => {
    return (
        <div className='page_container'>
            <SideBar />
            <form action="">
                <h1 className="font_poppins_regular">Cadastro de Produtos</h1>
                <div className="input_containers">
                    <Input id="prod_code" placeholder="Código do Produto" inputType="number" LabelIcon={LiaInfoSolid} hasIconAside={true}/>
                    <Input id="prod_name" placeholder="Nome do Produto" inputType="text" LabelIcon={MdOutlineNewLabel} hasIconAside={true}/>
                    <Input id="prod_fabDate" placeholder="Data de Fabricação" inputType="date" LabelIcon={MdDateRange} hasIconAside={true}/>
                    <Input id="prod_expDate" placeholder="Data de Vencimento" inputType="date" LabelIcon={MdDateRange} hasIconAside={true}/>
                    <Input id="prod_barCode" placeholder="Código de Barras (Opcional)" inputType="text" LabelIcon={FaBarcode} hasIconAside={true}/>
                    <Input id="prod_alergics" placeholder="Alergicos" inputType="string" LabelIcon={TbMoodSick} hasIconAside={true}/>
                    <Input id="prod_desc" placeholder="Descrição do Produto" inputType="string" LabelIcon={MdOutlineDescription} hasIconAside={true}/>
                    <Input id="price" placeholder="Valor do Produto" inputType="number" LabelIcon={MdAttachMoney} hasIconAside={true}/>
                </div>
                <button className='font_poppins_bold'>
                    <MdOutlineAddShoppingCart /> Cadastrar produto
                </button>
            </form>
        </div>
    )
}