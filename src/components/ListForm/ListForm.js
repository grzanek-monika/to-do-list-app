import styles from './ListForm.module.scss';
import Button from "../Button/Button.js";
import TextInput from "../TextInput/TextInput.js";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsReducer.js';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
    }

    return(
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.inputStyle}>Title: </span>
            <TextInput value={title} placeholder='Title' onChange={ e => setTitle(e.target.value)}  />
            <span className={styles.inputStyle}> Description: </span>
            <TextInput value={description} placeholder='Description' onChange={ e => setDescription(e.target.value)}  />
            <Button>Add list</Button>
        </form>
    )
}

export default ListForm;