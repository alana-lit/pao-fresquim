import { SideBar } from "../../components/SideBar/SideBar"
import "./homePage.css"

export const HomePage = () => {
    // TODO: Get the username from the localStorage (?) or receive it as a prop from the routing fn.
    return (
        <div className="home_container">
            <SideBar />
            <section>
                <h1 className="font_poppins_bold">Bem vindo(a), João!</h1>
                <p className="font_inter_regular">
                    Mais frescos que os nossos pães? - Só o seu Joaquim!
                </p>
            </section>
        </div>
    )
}
