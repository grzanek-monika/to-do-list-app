import React from 'react';
import Container from './components/Container/Container.js';
import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SerachForm.js';
import List from './components/List/List.js';

const App = () => {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>  
    </div> 
  );
};

export default App;