import React from 'react';
import Header from '../components/header';
import images from '../assets/images/images';
import AddToCartBtn from '../components/addToCartBtn';

import "../assets/style/itemPage.css";

const ItemPage = (props) => {

    const item = props.location.customNameData;

    return (
        <div className="page-container">
            <Header title={item.name} />
            <div className="item-container">
                <section className="image-container">
                    <img src={images[`${item.id}`]} className="item-image" alt="itemImage" />
                </section>
                <section className="about">{item.about}</section>
                <section className="price">{`Price: ${item.price}$`}</section>
            </div>
            <div className="add-to-cart-container add-to-cart-btn-container">
                <AddToCartBtn product={item} />
            </div>
        </div>
    );

};

export default ItemPage;