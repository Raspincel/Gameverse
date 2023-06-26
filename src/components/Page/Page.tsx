import { useEffect, useState } from "react";
import { GamesInterface, useGames } from "../../contexts/GamesData";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Card from "../Card/Card";
import { PageContainer } from "./style";
import { updatePageCounter } from "../../util/updatePageCounter";
import LoadingPage from "./LoadingPage/LoadingPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import { useTimeout } from 'usehooks-ts'
import NoGamesPage from "./NoGamesPage/NoGamesPage";

interface PageProps {
  page: number;
  searchFilter: string;
  genre: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface ErrorObject {
  response: {
    status: number
  }
}

export default function Page({ page, searchFilter, genre, setErrorMessage }: PageProps) {
  const { games, setGames } = useGames();
  const [fetchTimeout, setFetchTimeout] = useState(false)
  
    const fetchData = async ()=> {
        const config = { headers: { 'dev-email-address': import.meta.env.VITE_EMAIL } };

        const { data } = await axios.get("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data", config);

        return data
    }


    useTimeout(()=> {
      if (isLoading)
        setFetchTimeout(true)
    }, 5000)


  const { data, isLoading, error, isError } = useQuery(["games"], fetchData, {
    refetchOnWindowFocus: false,
    retry: false
  });



  useEffect(() => {

    if (!isError && data) {
      setGames(data);
      setErrorMessage("")
    } else if (isError) {
        const codes: Array<unknown | number> = [500, 502, 503, 504, 507, 508, 509]
    
        const message = (codes.includes((error as ErrorObject).response.status)) ? "O servidor fahou em responder, tente recarregar a página" : "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
    
        setErrorMessage(message)
    } else if (isLoading) {
      setErrorMessage("Carregando conteúdo. Aguarde!")
    }

  }, [isError, data, setGames]);

  if (fetchTimeout) {
    const message = "O servidor demorou para responder, tente mais tarde"
    setErrorMessage(message)
    return <ErrorPage /> 
  }

  if (isLoading) {
    return <LoadingPage/>
  }

  if (isError) {
    return <ErrorPage />
  }

  if (searchFilter || genre) {

    let filteredSearch: GamesInterface[] = []

    filteredSearch = (genre) ? games.filter((game, key)=> { 
        return game.genre.toLowerCase() === genre
    }) : games

    let filteredGames = []

    let counter = updatePageCounter(page, searchFilter, filteredSearch)
    if (counter === -1)
      return <NoGamesPage/>

    while (filteredGames.length !== 9 && filteredSearch[counter]) {
  
        if (filteredSearch[counter].title.toLowerCase().includes(searchFilter)) {
          filteredGames.push(filteredSearch[counter])
        }

        ++counter
    }

    return <PageContainer>
      {filteredGames.map((game, key)=> { 
        return <Card {...game} key={key}/> 
      })}
    </PageContainer>
  }

  if (games) {
    const gamesOnPage = games.slice((page - 1) * 9, page * 9)

    return <PageContainer>
        {   
            gamesOnPage.map((game, key)=> { 
              return <Card key={key} {...game}/> 
            })
        }
    </PageContainer>
  }
}
