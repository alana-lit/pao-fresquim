import './addProduct.css'
import { SideBar } from '../../components/SideBar/SideBar.jsx'
import { Input } from '../../components/Input/Input.jsx'
import { MdAttachMoney, MdDateRange, MdOutlineAddShoppingCart, MdOutlineDescription, MdOutlineNewLabel } from 'react-icons/md'
import { FaBarcode, FaBox } from 'react-icons/fa'
import { LiaInfoSolid } from 'react-icons/lia'
import { TbMoodSick } from 'react-icons/tb'
import { processPayload } from '../../utils/requests.js'
import Swal from 'sweetalert2'

export const AddProductPage = () => {
    const handleAddProduct = async (e) => {
        e.preventDefault()

        const schema = {
            "prod_code": {"type": "int", "alias": "code"},
            "prod_name": {"type": "string", "alias": "nomeProduto"},
            "prod_fabDate": {"type": "string", "alias": "dataFabricacao"},
            "prod_expDate": {"type": "string", "alias": "dataValidade"},
            "prod_lot": {"type": "string", "alias": "lote"},
            "prod_barCode": {"type": "string", "alias": "codigoBarra"},
            "prod_alergics": {"type": "string", "alias": "alergicos"},
            "prod_desc": {"type": "string", "alias": "descricao"},
            "prod_price": {"type": "float", "alias": "precoUnitario"},
        }
        const payload = processPayload("div#addProductData", schema)

        const BASE_URL = import.meta.env.VITE_DB_URL
        const response = await fetch(`${BASE_URL}/produtos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if(response.status != 201) {
            Swal.fire({
                title: "Não foi possível cadastrar seu produto!",
                text: "Por favor, tente novamente mais tarde ou entre em contato conosco para que possamos lhe atender melhor.",
                icon: "error"
            })
            return
        }

        Swal.fire({
            title: "Seu produto foi cadastrado com sucesso!",
            text: "O novo produto já está visível e pode ser modificado ou excluído. Acesse a visualização de produtos para mais informações.",
            icon: "success"
        })
    }

    return (
        <div className='page_container'>
            <SideBar />
            <form onSubmit={(e) => handleAddProduct(e)}>
                <h1 className="font_poppins_regular">Cadastro de Produtos</h1>
                <div id="addProductData" className="input_containers">
                    <Input id="prod_code" placeholder="Código do Produto" inputType="number" LabelIcon={LiaInfoSolid} hasIconAside={true}/>
                    <Input id="prod_name" placeholder="Nome do Produto" inputType="text" LabelIcon={MdOutlineNewLabel} hasIconAside={true}/>
                    <Input id="prod_fabDate" placeholder="Data de Fabricação" inputType="date" LabelIcon={MdDateRange} hasIconAside={true}/>
                    <Input id="prod_expDate" placeholder="Data de Vencimento" inputType="date" LabelIcon={MdDateRange} hasIconAside={true}/>
                    <Input id="prod_lot" placeholder="Lote do Produto" inputType="text" LabelIcon={FaBox} hasIconAside={true}/>
                    <Input id="prod_barCode" placeholder="Código de Barras (Opcional)" inputType="text" LabelIcon={FaBarcode} hasIconAside={true}/>
                    <Input id="prod_alergics" placeholder="Alergicos" inputType="string" LabelIcon={TbMoodSick} hasIconAside={true}/>
                    <Input id="prod_desc" placeholder="Descrição do Produto" inputType="string" LabelIcon={MdOutlineDescription} hasIconAside={true}/>
                    <Input id="prod_price" placeholder="Valor do Produto" inputType="number" LabelIcon={MdAttachMoney} hasIconAside={true}/>
                </div>
                <button className='font_poppins_bold'>
                    <MdOutlineAddShoppingCart /> Cadastrar produto
                </button>
            </form>
        </div>
    )
}