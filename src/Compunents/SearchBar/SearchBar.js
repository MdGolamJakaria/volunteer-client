import React from 'react';

const SearchBar = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <h1 className='m-auto text-uppercase'>I grow by helping people in need.</h1>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <input className='p-2 pr-5' type="search" name="" id="" placeholder='search...' />
                <input className='btn btn-primary px-3' type="submit" value="Search" />
            </div>
        </div>
    );
};

export default SearchBar;