import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Item from './item';
import Header from './header';
import SearchEngine from './searchEngine';

import '../assets/style/homePage.css';



const HomePage = () => {

    const [noSerpResults, setNoSerpResults] = useState(false);

    const filteredProducts = useSelector((state) => state.products);



    useEffect(() => {
        // simulates async api
        setTimeout(() => {
            // setFilteredProducts([...data.products]);
        }, 500)
    }, [])


    useEffect(() => {
        if (filteredProducts.length == 0) {
            setNoSerpResults(true);
        } else {
            setNoSerpResults(false);
        }
    }, [filteredProducts]);


    return (
        <div className="page-container">
            <Header title={"Ice-Cream Store On-Line"} />

            <SearchEngine />
            {noSerpResults ? <p>Sorry, no such icecream!</p> : null}
            <div className="products-container">
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