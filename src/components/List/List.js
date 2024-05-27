import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store.js';

const List = () => {

    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));

    return(
    <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <section className={styles.columns}>
            {columns.map( column => <Column key={column.id} {...column}  />)}
        </section>
        <ColumnForm />

    </div>
    );
}

export default List;
