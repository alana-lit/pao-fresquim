import logo from "../assets/logo-pao-fresquim.svg"
import { Input } from "../components/Input"
import { FaAddressCard } from "react-icons/fa"
import { RiLockPasswordLine } from "react-icons/ri"

import "./login.css"

export const LoginPage = () => {
    return (
        <>
            <header className="login_header">
                <img src={logo} alt="Logo pão fresQUIM!" />
            </header>
            <form action="" className="login_form">
                <div>
                    <h1 className="font_poppins_bold">LoQUIM - Pão FresQUIM!</h1>
                    <div>
                        <Input id="employeeNum" placeholder="Matrícula" LabelIcon={FaAddressCard} hasIconAside={true} inputType="text"/>
                        <Input id="employeePass" placeholder="Senha" LabelIcon={RiLockPasswordLine} hasIconAside={true} inputType="password"/>
                    </div>
                    <button className="font_inter_semibold" type="submit">Entrar</button>
                </div>
            </form>
        </>
    )
}