import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Container from './components/Container/Container.js';
import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>  
    </main> 
  );
};

export default App;