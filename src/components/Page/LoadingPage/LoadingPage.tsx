import Card, { CardProps } from "../../Card/Card"
import { PageContainer } from "../style"

export default function LoadingPage() {

    const cardModel: CardProps = {
        id: 0,
        title: 'Loading',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921',
        short_description: "Wait a moment, we're fetching the games' data!",
        game_url: '/',
        genre: 'Fun',
        platform: 'Yours',
        publisher: 'Me',
        developer: 'Me again',
        release_date: 'Now',
        key: 0
    }

    const card = new Array<CardProps>(9).fill({ ...cardModel }).map((el, index) => {
        return { ...el, key: index };
      });
    return (
        <PageContainer>
            {card.map((el)=> {
                return <Card {...el}/>
            })}
        </PageContainer>
    )

}