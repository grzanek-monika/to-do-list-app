import styles  from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    }


    return(
        <form className={styles.ColumnForm} onSubmit={handleSubmit}>
            <span className={styles.inputStyle}>Title: </span>
            <TextInput value={title} placeholder='Title' onChange={ e => setTitle(e.target.value)}  />
            <span className={styles.inputStyle}> Icon: </span>
            <TextInput value={icon} placeholder='Icon' onChange={ e => setIcon(e.target.value)}  />
            <Button>Add column</Button>
        </form>
    )
}

export default ColumnForm;