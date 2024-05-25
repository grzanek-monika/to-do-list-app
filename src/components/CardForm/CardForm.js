import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store.js';

const CardForm = ({columnId}) => {
    
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(addCard({title, columnId}));
        setTitle('');
    }
    return(
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput placeholder='Add new card...' value={title } onChange={e => setTitle(e.target.value)} />
            <Button>Add</Button>
        </form>
    )
}

export default CardForm;