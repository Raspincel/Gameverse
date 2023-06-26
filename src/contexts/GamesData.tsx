import { createContext, SetStateAction, useContext, useState } from "react";

export interface GamesInterface {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string
}

interface GamesContextInterface {
    games: GamesInterface[],
    setGames: React.Dispatch<SetStateAction<GamesInterface[]>>,

}

export const GamesContext = createContext<GamesContextInterface>({
    games: [],
    setGames: ()=> {}
})

export const useGames = ()=> useContext(GamesContext)

export function GamesProvider({ children }: { children: JSX.Element }) {
    const [games, setGames] = useState<GamesInterface[]>(null)

    return (
        <GamesContext.Provider value={{ games, setGames}}>
            { children }
        </GamesContext.Provider>
    )
}