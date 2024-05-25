import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store.js';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState('');
  const searchButton = e => {
    e.preventDefault();
    dispatch(updateSearchString(txt))
  }
    return(
      <form className={styles.searchForm} onSubmit={searchButton}>
        <TextInput placeholder='Search...' value={txt} onChange={e => setTxt(e.target.value)}/>
        <Button>
          <span className="fa fa-search" />
        </Button>
      </form>
    )
}

export default SearchForm;