import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString, getSearchString } from '../../redux/store.js';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => getSearchString(state));
  const [txt, setTxt] = useState(searchString);
  const searchButton = e => {
    e.preventDefault();
    dispatch(updateSearchString(txt));
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