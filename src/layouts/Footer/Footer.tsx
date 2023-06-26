import { FooterContainer } from "./style";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Footer() {

    return (
        <IconContext.Provider value={{ className: 'footer-icon' }}>
            <FooterContainer>
                <div className="author-infos">
                    <p>Criado por Ian Silva</p>
                    <span className="icon-section">
                        <a href="https://github.com/raspincel" target="_blank">
                            <FaGithub/>
                        </a>
                        <a href="https://github.com/raspincel" target="_blank">
                            <p>Github</p>
                        </a>
                    </span>

                    <span className="icon-section">
                        <a href="https://www.linkedin.com/in/ian-silva-09b410237/" target="_blank">
                            <FaLinkedin/>
                        </a>
                        <a href="https://www.linkedin.com/in/ian-silva-09b410237/" target="_blank">
                            <p>Linkedin</p>
                        </a>
                    </span>

                </div>
                <div className="project-infos">
                    <p>
                        Este website foi desenvolvido com o propósito de concorrer ao processo de seleção de uma vaga para Estágio Frontend com React pela App Masters, não possuindo quaisquer fins lucrativos ou de comercialização. 
                    </p>
                </div>
            </FooterContainer>
        </IconContext.Provider>
    )
}