import React from 'react';

export default function WelcomeMain()
{
    return(
        <div className={"d-flex justify-content-center text-light py-3 sticky-top"} style={{backgroundColor:"black"}}>
            <div className={"d-flex justify-content-between col-8"} style={{fontFamily:"Helvetica"}}>
                <div data-aos="fade-down" data-aos-once="true">
                    <strong>
                        Accueil
                    </strong>
                    <div style={{height:"2px",width:"100%",backgroundColor:"white",transition:"width 2s linear 1s"}}>
                </div>

                </div>
                <div data-aos="fade-down" data-aos-once="true">
                   <strong>
                       Competences
                   </strong>
                </div>
                <div data-aos="fade-down" data-aos-once="true">
                    <strong>
                        Formations
                    </strong>
                </div>
                <div data-aos="fade-down" data-aos-once="true">
                    <strong>
                        Realisations
                    </strong>

                </div>

            </div>
        </div>
    )
}
