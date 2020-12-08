import { FILTER_ITEMS, SORT_ITEMS } from '../actions';

import defaultItemsList from '../api/mockData.json';



const onSortingChange = (state, sortType) => {
    console.log(sortType);
    switch (sortType) {
        case "price":
            const sortedByPriceList = state.sort((a, b) => a.price > b.price ? 1 : -1);
            return [...sortedByPriceList];

        case "name":
            const sortedByNameList = state.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
            return [...sortedByNameList];

        default:
            return state;
    }
};

const onFilterChange = (state, query) => {
    const trimmedQuery = query.trim();


    if (trimmedQuery.length > 0) {
        const updatedList = state.filter(item => {
            const lowerCaseQuery = trimmedQuery.toLowerCase();
            if (item.name.toLowerCase().includes(lowerCaseQuery))
                return item;
        });

        if (updatedList.length > 0) {
            return [...updatedList];
        } else {
            return [];
        }
    } else {
        return [... defaultItemsList.products];
    }
};

export default (state = defaultItemsList.products, action) => {
    switch (action.type) {
        case SORT_ITEMS:
            return onSortingChange(state, action.payload);
        case FILTER_ITEMS:
            return onFilterChange(state, action.payload);

        default:
            return state;
    }
};