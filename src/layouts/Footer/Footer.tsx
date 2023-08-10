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

                </div>
            </FooterContainer>
        </IconContext.Provider>
    )
}