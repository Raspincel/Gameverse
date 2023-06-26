import Card, { CardProps } from "../../Card/Card"
import { PageContainer } from "../style"
import ErrorIcon from '../../../assets/Windows_XP_BSOD.png'

export default function ErrorPage() {

    let key = 0

    const cardModel: CardProps = {
        id: 0,
        title: 'Error',
        thumbnail: ErrorIcon,
        short_description: "Uh-oh. Something went wrong!",
        game_url: '/',
        genre: 'Sadness',
        platform: 'Yours',
        publisher: 'Me',
        developer: 'Me again',
        release_date: 'Now',
        key: 0
    }

    const card = new Array<CardProps>(9).fill({...cardModel}).map((el, index)=> {
        return { ...el, key: index }
    })

    return (
        <PageContainer>
            {card.map((el, key)=> {
                return <Card {...el}/>
            })}
        </PageContainer>
    )
}