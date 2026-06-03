import { useEffect, useState } from "react"
import { SideBar } from "../../components/SideBar/SideBar"
import { ProductCard } from "./ProductCard/ProductCart"
import { Loader } from "../../components/Loader/Loader"

import Swal from 'sweetalert2'

import "./productsPage.css"

export const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            const BASE_URL = import.meta.env.VITE_DB_URL
            const response = await fetch(`${BASE_URL}/produtos`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            setLoading(false)
            setProducts(data)

            if(response.status == 200 && data.length > 0) {
                Swal.fire({
                    title: "Produtos encontrados!",
                    toast: true,
                    showConfirmButton: false,
                    icon: "success",
                    timerProgressBar: true,
                    timer: 3000,
                    position: "top-right"
                })
            }
        }

        getProducts()
    }, [])

    const deleteProduct = async (productId) => {
        const BASE_URL = import.meta.env.VITE_DB_URL
        const response = await fetch(`${BASE_URL}/produtos/${productId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.status != 204) {
            Swal.fire({
                title: "Não foi possível excluir o produto!",
                text: "Tente novamente mais tarde ou entre em contato com nosso suporte para que possamos lhe atender melhor.",
                icon: "error"
            })
        }
    }

    return (
        <div className="products_container">
            <SideBar />
            <main className="products_main">
                <ul className="scrollbar">
                    {products.map((product, idx) => <ProductCard productInfo={product} deleteProduct={deleteProduct} key={idx} />)}
                </ul>
            </main>
            { loading ? <Loader /> : null }
        </div>
    )
}