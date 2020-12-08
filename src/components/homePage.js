import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Item from './item';
import Header from './header';
import SearchEngine from './searchEngine';
import { setDocumentTitle } from '../utils/documentsUtils';

import '../assets/style/homePage.css';



const HomePage = () => {

    const [noSerpResults, setNoSerpResults] = useState(false);

    const filteredProducts = useSelector((state) => state.products);

    const storeTitle = "Ice-Cream Store";

    useEffect(() => {
        setDocumentTitle(storeTitle);
    }, [])


    useEffect(() => {
        if (filteredProducts.length === 0) {
            setNoSerpResults(true);
        } else {
            setNoSerpResults(false);
        }
    }, [filteredProducts]);


    return (
        <div className="page-container">
            <Header title={storeTitle} />

            <SearchEngine />
            {noSerpResults ? <p>Sorry, no such icecream!</p> : null}
            <div className="home-page-products-container">
                {filteredProducts.map(item => {
                    return (
                        <Item key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;