import React, { useState } from 'react'
import { useEffect } from 'react'
import WebFont from 'webfontloader'
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
  
  // I have no idea why GlobalStyle needs this, but it needs
  interface GlobalStyleProps<T> { 
    raw: readonly string[];
    length: number;
    concat: { (...items: ConcatArray<string>[]): string[]; (...items: (string | ConcatArray<string>)[]): string[]; };
    join: (separator?: string) => string;
    slice: (start?: number, end?: number) => string[];
    indexOf: (searchElement: string, fromIndex?: number) => number;
    lastIndexOf: (searchElement: string, fromIndex?: number) => number;
    every: { <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): readonly S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean; }
    some: (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean;
    forEach: (callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void;
    map: <U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[];
    filter: { <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): S[]; (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[]; };
    reduce: (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string)=> string;
    reduceRight: (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string)=> string;
    find: { <S extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S, thisArg?: any): S; (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string; };
    findIndex: (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number;
    keys: () => IterableIterator<number>;
    entries: () => IterableIterator<[number, string]>;
    values: () => IterableIterator<string>;
    includes: (searchElement: string, fromIndex?: number) => boolean;
    flat: <A, D extends number = 1>(this: A, depth?: D) => FlatArray<A, D>[];
    flatMap: <U, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U | readonly U[], thisArg?: This) => U[];
    at: (index: number) => string;
    [Symbol.iterator](): IterableIterator<T>;
  }

  let temp: GlobalStyleProps<any>;

  return (
    <QueryClientProvider client={queryClient}>

        
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
