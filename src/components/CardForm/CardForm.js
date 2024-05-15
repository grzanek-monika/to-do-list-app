import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault(); 
        props.action({title: title}, props.columnId);
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