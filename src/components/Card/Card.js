import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store.js';


const Card = ({title, id, isFavorite}) => {
    const dispatch = useDispatch();
    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(id));
        console.log('click')
    }
    return (
        <li  className={styles.card}  key={id}>
            {title} 
            <button onClick={toggleFavorite} className={styles.btnFavorite} >
                <span className={clsx("fa fa-star-o", isFavorite && styles.isFavorite)}/>    
            </button>
        </li>
    )
}

export default Card;