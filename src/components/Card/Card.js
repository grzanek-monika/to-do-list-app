import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';


const Card = ({title, id, isFavorite}) => {
    const dispatch = useDispatch();
    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(id));
    }

    const remove = e => {
        e.preventDefault();
        dispatch(removeCard(id));
    }
    return (
        <li  className={styles.card}  key={id}>
            <div>{title}</div> 
            <div>
                <button onClick={toggleFavorite} className={styles.btnFavorite} >
                    <span className={clsx("fa fa-star-o", isFavorite && styles.isFavorite)}/>    
                </button>
                <button onClick={remove} className={styles.btnFavorite} >
                    <span className='fa fa-trash' />    
                </button>
            </div>
        </li>
    )
}

export default Card;