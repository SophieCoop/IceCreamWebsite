export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const FILTER_ITEMS = "FILTER_ITEMS"
export const SORT_ITEMS = "SORT_ITEMS"


export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

export const removeProductfromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  };
};



export const filterItems = (query) => {
  return {
    type: FILTER_ITEMS,
    payload: query
  };
};

export const sortItems = (sortType) => {
  return {
    type: SORT_ITEMS,
    payload: sortType
  };
};