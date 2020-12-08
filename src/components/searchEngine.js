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
        <div className="search-engine-container">
            <p className="search-engine-title">Search For Ice Cream:</p>
            <div className="search-engine-hint-container">
                <Hint options={options}>
                    <input type="text" className="search-engine-hint-input"
                        value={searchText} onChange={onQueryChange} />
                </Hint>

                <select className="search-engine-sort-filter" onChange={(event) => dispatch(sortItems(event.target.value))}>
                    <option value="name">Sort by name</option>
                    <option value="price" >Sort by price</option>
                </select>

            </div>
        </div>
    )

};

export default SearchEngine;