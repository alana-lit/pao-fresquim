import { FaTrash } from "react-icons/fa"
import "./productCard.css"

export const ProductCard = ({ productInfo, deleteProduct }) => {
    return (
        <li className="product_card_container">
            <div>
                <p className="font_inter_semibold">{productInfo.nomeProduto}</p>
                <p className="font_poppins_regular">Fabricado em: {productInfo.dataFabricacao || "Não informado"}</p>
                <p className="font_poppins_regular">Vencimento: {productInfo.dataValidade || "Não informado"}</p>
                <p className="font_poppins_regular">Categoria: {productInfo.categoria || "Não informado"}</p>
                <p className="font_poppins_regular">Alergicos: {productInfo.alergicos || "Não informado"}</p>
                <p className="font_poppins_regular">Descrição: {productInfo.descricao || "Não informado"}</p>
                <p className="font_poppins_regular">Valor: {productInfo.precoUnitario || "Não informado"}</p>
            </div>
            <button onClick={(e) => deleteProduct(productInfo.id)}><FaTrash /></button>
        </li>
    )
}