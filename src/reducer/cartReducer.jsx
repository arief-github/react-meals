const initialState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEMS' :
            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return { 
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
    }

    return initialState;
};

export { cartReducer, initialState };