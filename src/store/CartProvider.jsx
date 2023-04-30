import CartContext from "./cart-context";
import {cartReducer, initialState} from "../reducer/cartReducer";
import { useReducer } from "react";

const CartProvider = props => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState)

    const addItemToCartHandler = (item) => {
        dispatch({ type: 'ADD_ITEMS', item: item })
    };
    const removeItemFromCartHandler = id => {};
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;