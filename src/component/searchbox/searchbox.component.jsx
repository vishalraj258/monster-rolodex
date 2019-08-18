import React from 'react';
import './searchbox.style.css';

export const Searchbox = ({placeholder,handlechange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handlechange}
    />
);