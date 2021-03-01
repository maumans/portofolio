import React from 'react';
import welcomeCover from "../img/welcome_cover.jpg"
import maPhoto from "../img/ma_photo.jpg"
import WelcomeMain from "../Components/Welcome_main"
import {useEffect} from "react"




export default function Accueil(props) {

    return (
        <div style={{backgroundColor:"white"}}>
            <WelcomeMain/>
            <div className={"h-100 mb-5"} style={{backgroundImage:(`url(${welcomeCover})`),backgroundSize:"cover",backgroundRepeat:"none"}}>
                <div className={"d-flex justify-content-center"}>
                    <h1 className={"text-light mt-4 display-4"} style={{fontFamily:"Candara"}} data-aos="zoom-in">
                        Bienvenu sur mon portofolio
                    </h1>
                </div>
            </div>

            <div className={"container"}>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <div className={"mr-5"}>
                        <img src={maPhoto} style={{height:"100vh"}} alt="" data-aos="fade-right" data-aos-duration = "1000"/>
                    </div>
                    <div>
                        <h1 data-aos="zoom-in" data-aos-duration ="1000" style={{fontFamily:"Candara"}}>
                            Je suis Maurice MANSARE ancien étudiant en génie logiciel jusqu'a obtention de licence à l'institut superieur d'informatique à DAKAR et ai à mon actif
                            de nombreuses appplications developpées notamment MansShop un site de vente de matériels high-techs et KvngMau un site de pop culture.
                        </h1>
                    </div>
                </div>

            </div>

        </div>

    );
}
