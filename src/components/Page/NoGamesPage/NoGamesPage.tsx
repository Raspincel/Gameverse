import Card, { CardProps } from "../../Card/Card"
import { PageContainer } from "../style"

export default function NoGamesPage() {

    const cardModel: CardProps = {
        id: 0,
        title: 'Nothing to see here',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Red_question_mark.svg/1200px-Red_question_mark.svg.png',
        short_description: "There are no games in this page with this combination of filters!",
        game_url: '/',
        genre: 'None',
        platform: 'Yours',
        publisher: 'No one',
        developer: 'Ok, maybe Dave',
        release_date: 'Tomorrow?',
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