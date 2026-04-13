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
                    Eu não SOU o perigo, sr QUIM. Eu ESTOU em perigo!<br/>
                    Um cliente compra pão de ontem e você acha que eu estou com problemas?<br/>
                    Você tá totalmente certo! EU sou demitido; Eu DESAPAREÇO; Eu DEIXO DE EXISTIR!
                </p>
                { /* https://youtu.be/Ly1o219rj5U?si=G6JNP8Pz2KU79yp7 -> original */ }
                { /* https://www.youtube.com/watch?v=bI8Iy7dHlME -> MEME */ }
            </section>
        </div>
    )
}
