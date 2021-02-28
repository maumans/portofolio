import React from 'react';
import welcomeCover from "../img/welcome_cover.jpg"
import WelcomeMain from "../Components/Welcome_main"

export default function Accueil(props) {
    return (
        <div className={"h-100"} style={{backgroundImage:(`url(${welcomeCover})`),backgroundSize:"cover",backgroundRepeat:"none"}}>
            <WelcomeMain/>
            <div className={"d-flex justify-content-center mt-5"}>
                <h1 className={"text-light"} style={{fontFamily:"Candara"}}>
                    Bienvenu sur mon portofolio
                </h1>
            </div>

        </div>
    );
}
