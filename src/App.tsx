import { useState } from 'react'
import { useEffect } from 'react'
import WebFont from 'webfontloader'
import { GlobalStyle } from './styles/globalStyles'
import Page from './components/Page/Page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainContainer } from './style'
import Input from './components/Input/Input'
import Select from './components/Select/Select'
import { SetPage } from './components/SetPage/SetPage'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'

function App() {
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [page, setPage] = useState(1)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter:500,700']
      }
    })    
  }, []);

  const queryClient = new QueryClient()
  
  // I have no idea what GlobalStyle is missing, but it works

  return (
    <QueryClientProvider client={queryClient}>
        <GlobalStyle />
      <MainContainer>
        <Header/>
        {(errorMessage) ? <span className='error-message'><h1>{errorMessage}</h1></span> : <></>}
          <div className="options">
            <Select setGenre={setGenre} setPage={setPage}/>
            <Input setSearch={setSearch} setPage={setPage}/>
          </div>
          <Page page={page} searchFilter={search} genre={genre} setErrorMessage={setErrorMessage }/>
        <SetPage page={page} setPage={setPage}/>

        <Footer/>
      </MainContainer>
        
    </QueryClientProvider>
  )
}

export default App
