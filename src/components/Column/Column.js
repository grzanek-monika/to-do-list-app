import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsReducer.js';

const Column = ({...props} )=> {
   
    const cards = useSelector(state => getFilteredCards(state, props.id));

    console.log('Column render');

    return (
    <article className={styles.column}>
        <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)}
        </ul>
        <CardForm columnId={props.id}/>
    </article>
    )
}

export default Column;