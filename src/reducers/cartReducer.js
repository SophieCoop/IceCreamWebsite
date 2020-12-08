
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions';


const addProduct = (state, product) => {
    return { ...state };

}

const removeProduct = (state, product) => {
    return { ...state};

}

const CartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProduct(state, action.payload);

        case REMOVE_PRODUCT:
            return removeProduct(state, action.payload);

        default:
            return state;
    }
};

export default CartReducer;