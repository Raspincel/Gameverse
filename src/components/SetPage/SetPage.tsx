import { SetPageContainer } from "./style"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { IconContext } from "react-icons";

interface SetPageProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function SetPage({ page, setPage }: SetPageProps) {

    let lowerbound = page - 4

    if (lowerbound < 1) {
        lowerbound = 1
    }

    const pages = new Array<number>(9).fill(lowerbound)

    pages.forEach((el, key, arr)=> { 
        arr[key] = lowerbound + key 
    })

    const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=> {
        setPage(Number(e.currentTarget.textContent))
    }

    const adjustedPages = pages.map((el, key)=> {
        return (
            <span key={el} onClick={onClick}>
                {(el === page) ? <b>{el}</b> : el}
            </span> 
        )
    })

    const decreasePage = () =>{
        if (page === 0)
            return;

        setPage(page - 1);
    }

    const increasePage = () =>{
         setPage(page + 1);
    }

    return (
        <SetPageContainer>
            <IconContext.Provider value={{ className: 'arrow-icon' }}>
                <FiArrowLeftCircle onClick={decreasePage}/>
                {adjustedPages.map((el, key)=>{ return el })}
                <FiArrowRightCircle onClick={increasePage}/>
            </IconContext.Provider>
        </SetPageContainer>
    )
}