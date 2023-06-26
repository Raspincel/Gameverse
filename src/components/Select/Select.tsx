import ReactSelect from 'react-select'
import { SelectContainer } from './style'

interface SelectProps {
    setGenre: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface ChoiceProps {
    value: string;
}

function Select({setGenre, setPage}: SelectProps) {

    const genres = [
        { value: '', label: 'Show all'},
        { value: 'action rpg', label: 'Action RPG' },
        { value: 'arpg', label: 'ARPG' },
        { value: 'battle royale', label: 'Battle Royale' },
        { value: 'card game', label: 'Card Game' },
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'fighting', label: 'Fighting' },
        { value: 'mmo', label: 'MMO' },
        { value: 'mmoarpg', label: 'MMOARPG' },
        { value: 'mmorpg', label: 'MMORPG' },
        { value: 'moba', label: 'Moba' },
        { value: 'racing', label: 'Racing' },
        { value: 'shooter', label: 'Shooter' },
        { value: 'social', label: 'Social' },
        { value: 'sports', label: 'Sports' },
        { value: 'strategy', label: 'Strategy' }
    ]

    const changeGenre = ({value}: ChoiceProps)=> {
        setPage(1)
        setGenre(value)
    }

    return (
        <SelectContainer>
            <ReactSelect options={genres}  classNamePrefix="react-select" className="select" defaultValue={genres[0]} onChange={changeGenre}/>
        </SelectContainer>
    )
}

export default Select