import { GamesInterface } from "../contexts/GamesData"

export function updatePageCounter(page: number, search: string, games: GamesInterface[]) {
    
    let counter = 0
    let gamesCount = 0

    while (page !== 1) {
        ++counter
        
        if (counter >= games.length)
            return -1

        if (games[counter].title.toLowerCase().includes(search)) {
            ++gamesCount
          if (counter % 9 === 0)
            page -= 1
        }
      }

    return counter
}