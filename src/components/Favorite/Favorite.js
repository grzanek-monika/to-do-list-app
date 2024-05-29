import PageTitle from "../PageTitle/PageTitle.js";
import { getFavotiteCards } from "../../redux/store.js";
import { useSelector } from "react-redux";
import styles from './Favorite.module.scss';
import Card from "../Card/Card.js";

const Favorite = () => {

    const favoriteCards = useSelector(state => getFavotiteCards(state))
    if(!favoriteCards)
        return(
            <div>
                <PageTitle>You don't have favourite cards yet.</PageTitle>
            </div>
        );
        return(
            <>
                <h2 className={styles.title}>
                    <PageTitle>Favorite</PageTitle>
                </h2>
                <div className={styles.wrapper}>          
                    <article className={styles.column}>
                        <ul className={styles.cards}>
                            {favoriteCards.map(favoriteCard => <Card key={favoriteCard.id} {...favoriteCard} >{favoriteCard.title}</Card>)}
                        </ul>
                    </article>
                </div>
            </>
        
        )
    }

export default Favorite;