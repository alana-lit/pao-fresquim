import { useMemo, useState } from "react"

import { FaBarcode, FaMoneyBillWave, FaPix, FaTrash } from "react-icons/fa6"
import { MdQrCodeScanner } from "react-icons/md"
import { IoCardOutline } from "react-icons/io5"
import { FiMinus, FiPlus } from "react-icons/fi"

import { Input } from "../../components/Input/Input"
import { ModalContainer } from "../../components/ModalContainer/ModalContainer"

import "./salesPage.css"

const mockProducts = [
    {
        id: 1,
        code: "789100000001",
        name: "Pão Francês",
        price: 0.90
    },
    {
        id: 2,
        code: "789100000002",
        name: "Leite Integral",
        price: 6.50
    },
    {
        id: 3,
        code: "789100000003",
        name: "Coca-Cola 2L",
        price: 11.99
    }
]

export const SalesPage = () => {
    const [productCode, setProductCode] = useState("")
    const [cart, setCart] = useState([])

    const [paymentMethod, setPaymentMethod] = useState("pix")

    const [showBarcodeModal, setShowBarcodeModal] = useState(false)

    const [fiadoData, setFiadoData] = useState({
        name: "",
        cpf: "",
        phone: "",
        address: ""
    })

    const addProduct = () => {
        const productCode = document.querySelector("input#productCode").value
        console.log(productCode)
        console.log(document.querySelector("input#productCode"))
        if (!productCode) return

        const foundProduct = mockProducts.find(
            product => product.code === productCode
        )

        if (!foundProduct) {
            alert("Produto não encontrado")
            return
        }

        const existingProduct = cart.find(
            product => product.code === foundProduct.code
        )

        if (existingProduct) {
            setCart(prev =>
                prev.map(product =>
                    product.code === foundProduct.code
                        ? {
                            ...product,
                            quantity: product.quantity + 1
                        }
                        : product
                )
            )
        } else {
            setCart(prev => [
                ...prev,
                {
                    ...foundProduct,
                    quantity: 1
                }
            ])
        }

        setProductCode("")
    }

    const updateQuantity = (code, operation) => {
        setCart(prev =>
            prev
                .map(product => {
                    if (product.code !== code) return product

                    const quantity =
                        operation === "increase"
                            ? product.quantity + 1
                            : product.quantity - 1

                    return {
                        ...product,
                        quantity
                    }
                })
                .filter(product => product.quantity > 0)
        )
    }

    const removeProduct = code => {
        setCart(prev =>
            prev.filter(product => product.code !== code)
        )
    }

    const total = useMemo(() => {
        return cart.reduce((acc, product) => {
            return acc + (product.price * product.quantity)
        }, 0)
    }, [cart])

    const finishSale = () => {
        const saleData = {
            cart,
            paymentMethod,
            fiadoData: paymentMethod === "fiado"
                ? fiadoData
                : null,
            total
        }

        console.log(saleData)

        alert("Venda finalizada")
    }

    return (
        <div className="sales-page scrollbar">
            <div className="sales-container">

                {/* LEFT */}
                <section className="sales-left">

                    <div className="sales-header">
                        <h1>Área de vendas</h1>
                        <p>Caixa operacional</p>
                    </div>

                    <div className="product-actions">

                        <div className="product-code-input">
                            <Input
                                id="productCode"
                                icon={<FaBarcode />}
                                placeholder="Código do produto"
                                value={productCode}
                                type="text"
                            />
                        </div>

                        <button
                            className="barcode-button"
                            onClick={() => setShowBarcodeModal(true)}
                        >
                            <MdQrCodeScanner />
                            Ler código de barras
                        </button>

                        <button
                            className="add-product-button"
                            onClick={addProduct}
                        >
                            Adicionar produto
                        </button>
                    </div>

                    <div className="cart-container">

                        <div className="cart-header">
                            <span>Produto</span>
                            <span>Qtd.</span>
                            <span>Preço</span>
                            <span>Total</span>
                            <span>Ações</span>
                        </div>

                        {
                            cart.length === 0
                                ? (
                                    <div className="empty-cart">
                                        Nenhum produto adicionado
                                    </div>
                                )
                                : (
                                    cart.map(product => (
                                        <div
                                            className="cart-item"
                                            key={product.code}
                                        >
                                            <div className="product-info">
                                                <strong>
                                                    {product.name}
                                                </strong>

                                                <span>
                                                    #{product.code}
                                                </span>
                                            </div>

                                            <div className="quantity-controls">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            product.code,
                                                            "decrease"
                                                        )
                                                    }
                                                >
                                                    <FiMinus />
                                                </button>

                                                <span>
                                                    {product.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            product.code,
                                                            "increase"
                                                        )
                                                    }
                                                >
                                                    <FiPlus />
                                                </button>
                                            </div>

                                            <span>
                                                R$ {product.price.toFixed(2)}
                                            </span>

                                            <span>
                                                R$ {
                                                    (
                                                        product.price *
                                                        product.quantity
                                                    ).toFixed(2)
                                                }
                                            </span>

                                            <button
                                                className="remove-button"
                                                onClick={() =>
                                                    removeProduct(product.code)
                                                }
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    ))
                                )
                        }

                    </div>
                </section>

                {/* RIGHT */}
                <section className="sales-right">

                    <div className="payment-card">

                        <h2>Pagamento</h2>

                        <div className="payment-options">

                            <button
                                className={
                                    paymentMethod === "pix"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setPaymentMethod("pix")
                                }
                            >
                                <FaPix />
                                Pix / Dinheiro
                            </button>

                            <button
                                className={
                                    paymentMethod === "card"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setPaymentMethod("card")
                                }
                            >
                                <IoCardOutline />
                                Cartão
                            </button>

                            <button
                                className={
                                    paymentMethod === "fiado"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setPaymentMethod("fiado")
                                }
                            >
                                <FaMoneyBillWave />
                                Fiado
                            </button>

                        </div>

                        {
                            paymentMethod === "fiado" && (
                                <div className="fiado-form">

                                    <h3>Dados do cliente</h3>

                                    <Input
                                        placeholder="Nome completo"
                                        value={fiadoData.name}
                                        onChange={e =>
                                            setFiadoData(prev => ({
                                                ...prev,
                                                name: e.target.value
                                            }))
                                        }
                                    />

                                    <Input
                                        placeholder="CPF"
                                        value={fiadoData.cpf}
                                        onChange={e =>
                                            setFiadoData(prev => ({
                                                ...prev,
                                                cpf: e.target.value
                                            }))
                                        }
                                    />

                                    <Input
                                        placeholder="Telefone"
                                        value={fiadoData.phone}
                                        onChange={e =>
                                            setFiadoData(prev => ({
                                                ...prev,
                                                phone: e.target.value
                                            }))
                                        }
                                    />

                                    <Input
                                        placeholder="Endereço"
                                        value={fiadoData.address}
                                        onChange={e =>
                                            setFiadoData(prev => ({
                                                ...prev,
                                                address: e.target.value
                                            }))
                                        }
                                    />

                                </div>
                            )
                        }

                        <div className="sale-summary">

                            <div>
                                <span>Itens:</span>
                                <strong>{cart.length}</strong>
                            </div>

                            <div>
                                <span>Total:</span>

                                <strong className="total-price">
                                    R$ {total.toFixed(2)}
                                </strong>
                            </div>

                        </div>

                        <button
                            className="finish-sale-button"
                            onClick={finishSale}
                        >
                            Finalizar venda
                        </button>

                    </div>
                </section>
            </div>

            {
                showBarcodeModal && (
                    <ModalContainer>
                        <div className="barcode-modal">

                            <h2>Leitor de código de barras</h2>

                            <p>
                                Integre aqui sua lib de scanner futuramente.
                            </p>

                            <button
                                onClick={() =>
                                    setShowBarcodeModal(false)
                                }
                            >
                                Fechar
                            </button>

                        </div>
                    </ModalContainer>
                )
            }
        </div>
    )
}