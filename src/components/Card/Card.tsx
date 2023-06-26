import { CardContainer } from "./style"

import { FaWindows, FaLinux } from 'react-icons/fa6'
import { BiGlobe } from "react-icons/bi";
import { PlatformIcon } from "../PlatformIcon/PlatformIcon";

export interface CardProps {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    key: number
}

export default function Card({ id, title, thumbnail, short_description, game_url, genre, platform, publisher, developer, release_date }: CardProps) {

    const isOnBrowser = platform.includes("Browser")
    const isOnWindows = platform.includes("Windows")
    const isComplicated = platform.includes("Yours")

    return (
        <CardContainer>            
            <a href={game_url}><img src={thumbnail}/></a>
            <div className="icons-container">
                    { isOnWindows && <PlatformIcon Icon={ FaWindows } platformName="Windows"/> }
                    { isOnBrowser && <PlatformIcon Icon={ BiGlobe } platformName="Web Browsers"/> }
                    { isComplicated && <PlatformIcon Icon={ FaLinux } platformName="Linux, I hope" /> }
                </div>
            <div className="bottom">
                <h2 className="title">{title}</h2>

                <span className="grid-wrapper">
                    <div className="game-infos">
                        <p className="game-description">{short_description}</p>
                        
                        <p className="section"><b>Genre:</b> {genre}</p>
                        <p className="section"><b>Publisher:</b> {publisher}</p>
                        <p className="section"><b>Developer:</b> {developer}</p>
                        <p className="section"><b>Release date:</b> {release_date}</p>              

                    </div>
                </span>


            </div>

            <a className="card-footer" target="_blank" href={game_url}>See more</a>

        </CardContainer>
    )
}