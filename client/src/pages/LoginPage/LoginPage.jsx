import logo from "../../assets/logo-pao-fresquim.svg"
import { Input } from "../../components/Input/Input"
import { FaAddressCard } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { processPayload } from "../../utils/requests"
import { Loader } from "../../components/Loader/Loader"

import Swal from "sweetalert2"

import "./login.css"

export const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        setLoading(true)
        const schema = {
            "employeeNum": {"type": "string", "alias": "usuario"},
            "employeePass": {"type": "string", "alias": "senha"},
        }
        const payload = processPayload("form.login_form>div>div", schema)

        const BASE_URL = import.meta.env.VITE_DB_URL
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if(response.status != 200) {
            Swal.fire({
                title: "Não foi possível efetuar o login!",
                text: "Tente novamente mais tarde ou entre em contato conosco para melhor lhe atender.",
                icon: "error"
            })
            setLoading(false)
            return
        }

        const data = await response.json()
        navigate("/home")
        localStorage.setItem("userId", data.id)
        localStorage.setItem("userPermission", data.nivelAcesso)

        Swal.fire({
            title: "Bem vindo(a)!",
            text: `Bem vindo, ${data.usuario}!`,
            toast: true,
            showConfirmButton: false,
            icon: "success",
            timerProgressBar: true,
            timer: 3000,
            position: "top-right"
        })
    }

    return (
        <>
            <header className="login_header">
                <img src={logo} alt="Logo pão fresQUIM!" />
            </header>
            <form onSubmit={(e) => handleSubmit(e)} className="login_form">
                <div>
                    <h1 className="font_poppins_bold">LoQUIM - Pão FresQUIM!</h1>
                    <div>
                        <Input id="employeeNum" placeholder="Matrícula" LabelIcon={FaAddressCard} hasIconAside={true} inputType="text"/>
                        <Input id="employeePass" placeholder="Senha" LabelIcon={RiLockPasswordLine} hasIconAside={true} inputType="password"/>
                    </div>
                    <button className="font_inter_semibold" type="submit">Entrar</button>
                </div>
            </form>
            {
                loading ? <Loader /> : null
            }
        </>
    )
}