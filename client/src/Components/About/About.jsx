import React from "react";
import imgEze from "../../Photos/eze.png";
import imgAli from "../../Photos/ali.png";
import imgSanti from "../../Photos/santi.png";
import imgEmi from "../../Photos/emi.png";
import imgBeto from "../../Photos/beto.png";
import imgMati from "../../Photos/mati.png";
import imgAbi from "../../Photos/abi.png";
import imgGer from "../../Photos/ger.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import "./index.css";


function aboutUs() {
    return (
        
        <div className="backgroundAboutUs">
            <NavBar />
        <div className="tituloEquipo">Nuestro Equipo</div>
        <div className="cardsContainer">
            <div className="card">
                <div className="divImg">
                <img className="img" src={imgEze} alt="img"/>
                </div>
                <h3 className="apodo">EZE</h3>
                <h2 className="nombreCompleto">Ezequiel Gomez</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
            <div className="card">
                <div className="divImg">
                <img className="img" src={imgAli} alt="img"/>
                </div>
                <h3 className="apodo">ALI</h3>
                <h2 className="nombreCompleto">Alissa Gamarra</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
            <div className="card">
            <div className="divImg">
                <img className="img" src={imgSanti} alt="img"/>
                </div>
                <h3 className="apodo">SANTI</h3>
                <h2 className="nombreCompleto">Santiago Larrique</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
            <div className="card">
            <div className="divImg">
                <img className="img" src={imgEmi} alt="img"/>
                </div>
                <h3 className="apodo">EMI</h3>
                <h2 className="nombreCompleto">Emiliano Hernandez</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
            <div className="card">
            <div className="divImg">
                <img className="img" src={imgBeto} alt="img"/>
                </div>
                <h3 className="apodo">BETO</h3>
                <h2 className="nombreCompleto">Alberto Martinez</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
            <div className="card">
            <div className="divImg">
                <img className="img" src={imgMati} alt="img"/>
                </div>
                <h3 className="apodo">MATI</h3>
                <h2 className="nombreCompleto">Matias Gimenez</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
            <div className="card">
            <div className="divImg">
                <img className="img" src={imgAbi} alt="img"/>
                </div>
                <h3 className="apodo">ABI</h3>
                <h2 className="nombreCompleto">Abigail Breno</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
            <div className="card">
            <div className="divImg">
                <img className="img" src={imgGer} alt="img"/>
                </div>
                <h3 className="apodo">GER</h3>
                <h2 className="nombreCompleto">German Fernandez</h2>
                <FontAwesomeIcon className="gitHub" icon={faGithub}/>
            </div>
        </div>
        <Footer />
        </div>



    )
}

export default aboutUs;