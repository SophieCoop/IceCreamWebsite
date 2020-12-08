import React from 'react';
// import { useDispatch } from 'react-redux';
import '../assets/style/addToCartBtn.css';
// import { addProductToCart } from '../actions';


const AddToCartBtn = ({product}) => {
    // const dispatch = useDispatch();

    const onItemClick = () => {
        // dispatch(addProductToCart(product));
    }

    return (
        <div className="add-to-cart-btn-container" onClick={onItemClick} >
            <span>ADD TO CART</span>
        </div>
    )
};

export default AddToCartBtn;