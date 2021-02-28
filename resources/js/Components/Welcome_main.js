import React from 'react';

export default function WelcomeMain()
{
    return(
        <div className={"d-flex justify-content-center text-light pt-3"}>
            <div className={"d-flex justify-content-between col-8"} style={{fontFamily:"Helvetica"}}>
                <div className={"p-1 rounded"} style={{border:"2px solid white"}}>
                    <strong>
                        Accueil
                    </strong>
                </div>
                <div>
                   <strong>
                       Competences
                   </strong>
                </div>
                <div>
                    <strong>
                        Formations
                    </strong>
                </div>
                <div>
                    <strong>
                        Realisations
                    </strong>

                </div>

            </div>
        </div>
    )
}
