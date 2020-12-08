import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Hint } from 'react-autocomplete-hint';

import { sortItems, filterItems } from '../actions';

import "../assets/style/searchEngine.css";


const options = [
    { id: 1, label: "Almond Fudge" },
    { id: 2, label: "Butter Pecan" },
    { id: 3, label: "Cherry Chocolate" },
    { id: 4, label: "Chocolate Chip" },
    { id: 5, label: "Chocolate Chunk Cookie" }

];

const SearchEngine = () => {

    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();

    const onQueryChange = (event) => {
        const query = event.target.value;
        setSearchText(query);

        dispatch(filterItems(query));
    }

    return (
        <div>
            <p className="search-title">Search For Ice Cream:</p>
            <Hint options={options}>
                <input type="text" className="input-engine" style={{ width: "1000px", height: "30px" }}
                    value={searchText} onChange={onQueryChange} />
            </Hint>
            <select className="sort-filter" onChange={(event)=> dispatch(sortItems(event.target.value))}>
                <option value="name">Sort by name</option>
                <option value="price" >Sort by price</option>
            </select>
        </div>
    )

};

export default SearchEngine;