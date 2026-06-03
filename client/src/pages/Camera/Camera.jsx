import { useState } from "react"

import "./camera.css"
import { SideBar } from "../../components/SideBar/SideBar"

export const Camera = () => {

    const cameras = [
        {
            id: 1,
            nome: "Câmera 1 - Loja",
            videoId: "dQw4w9WgXcQ"
        },
        {
            id: 2,
            nome: "Câmera 2 - Cozinha",
            videoId: "dQw4w9WgXcQ"
        }
    ]

    const [currentCamera, setCurrentCamera] = useState(0)

    const handlePrevious = () => {
        setCurrentCamera(
            currentCamera === 0
                ? cameras.length - 1
                : currentCamera - 1
        )
    }

    const handleNext = () => {
        setCurrentCamera(
            currentCamera === cameras.length - 1
                ? 0
                : currentCamera + 1
        )
    }

    return (
        <div className="page_container">

            <SideBar />

            <div className="camera_page">

                <h2>
                    {cameras[currentCamera].nome}
                </h2>

                <div className="camera_content">

                    <button
                        className="camera_nav_button"
                        onClick={handlePrevious}
                    >
                        ←
                    </button>

                    <div className="camera_video_container">

                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube-nocookie.com/embed/${cameras[currentCamera].videoId}?autoplay=1&controls=0&loop=1`}
                            title={cameras[currentCamera].nome}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                    </div>

                    <button
                        className="camera_nav_button"
                        onClick={handleNext}
                    >
                        →
                    </button>

                </div>

            </div>

        </div>
    )
}