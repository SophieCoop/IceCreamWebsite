import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/header';
import images from '../assets/images/images';
import AddToCartBtn from '../components/addToCartBtn';
import { setDocumentTitle } from '../utils/documentsUtils';
import "../assets/style/itemPage.css";

const ItemPage = (props) => {

    const item = props.location.customNameData;
    const history = useHistory();
    
    useEffect(() => {
        if (item){
            setDocumentTitle(item.name);
        }
    }, [item]);  

    if (!item) {
        //If no item - redirect to home page
        history.push('/');
        return(<div></div>);
    }

    return (
        <div className="page-container">
            <Header title={item.name} />
            <div className="item-page-properties-container">
                <section className="item-image-container">
                    <img src={images[`${item.id}`]} className="item-image" alt="itemImage" />
                </section>
                <section>{item.about}</section>
                <section className="item-page-price">{`Price: ${item.price}$`}</section>
            </div>

            <div className="item-add-to-cart-container item-page-add-to-cart-btn-container">
                <AddToCartBtn product={item} />
            </div>
        </div>
    );

};

export default ItemPage;