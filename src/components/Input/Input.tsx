import { BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { InputContainer } from './style'
import { useState } from 'react'

interface InputProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Input({ setSearch, setPage }: InputProps) {

    const [text, setText] = useState("")

    const changeText = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setText(event.target.value)
    }

    const clickEnter = (e: React.KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === 'Enter') {
            changeSearch();
        }
    }

    const changeSearch = ()=> {
        setPage(1)
        setSearch(text.toLowerCase())
    }

    return ( 
    <InputContainer>

        <input value={text} onChange={changeText} maxLength={50} placeholder="Search game" onKeyUp={clickEnter}/>
        <span className="icon-container">
            <IconContext.Provider value={{ className: 'icon' }}>
                <BsSearch onClick={changeSearch} />
            </IconContext.Provider>
        </span>
        
    </InputContainer>
    )
}