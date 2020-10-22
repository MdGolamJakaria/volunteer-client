import React from 'react';
import Events from '../Events/Events';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div className='container'>
            <Header></Header>
            <SearchBar></SearchBar>
            <Events></Events>
        </div>
    );
};

export default Home;