import React from 'react';
import { useHistory } from 'react-router-dom';

import AddToCartBtn from "./addToCartBtn";
import images from '../assets/images/images';

import '../assets/style/item.css';

const Item = ({ item }) => {

    const history = useHistory();


    const onItemClick = () => {
        history.push({
            pathname: '/icecreamItem',
            customNameData: item
        });
    };

    return (
        <div className="item-container" >
            <div onClick={onItemClick}>
                <div className="item-image-container">
                    <img src={images[`${item.id}`]} className="item-image" alt="itemImage" />
                </div>

                <p className="item-text-container">
                    <span className="item-title">{`${item.name}`}</span>
                    <span className="item-price">{`$${item.price}`}</span>
                </p>
            </div>
            <div className="item-add-to-cart-container">
                <AddToCartBtn product={item} />
            </div>
        </div>
    )
};

export default Item;