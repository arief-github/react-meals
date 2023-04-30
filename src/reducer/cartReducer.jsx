const initialState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_ITEMS' :
            const existingCartItemIndexAdd = state.items.findIndex((item) => item.id === action.item.id)
            const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

            const existingCartItem = state.items[existingCartItemIndexAdd]
            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndexAdd] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item); // returns a new
            }
            return {
                items: updatedItems,
                totalAmount: newTotalAmount
            }
        case 'REMOVE_ITEM' :
            const existingCartItemIndexRemove = state.items.findIndex((item) => item.id === action.id);
            const existingItem = state.items[existingCartItemIndexRemove];
            const updateTotalAmount = state.totalAmount - existingItem.price;
            let updatedItem;
            
            if(existingItem.amount === 1) {
                updatedItem = state.items.filter((item) => item.id !== action.id);
            } else {
                const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItem = [...state.items];
                updatedItem[existingCartItemIndexRemove] = updateItem;
            }

            return {
                items: updatedItem,
                totalAmount: updateTotalAmount
            }
    }

    return initialState;
};

export { cartReducer, initialState };