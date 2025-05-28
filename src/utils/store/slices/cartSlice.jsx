import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cartItems: [],
        totalAmount: 0,
        totalDiscount: 0,
        grandTotal: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.unshift(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        removeAllItems: (state, action) => {
            state.cartItems.length = 0;
        },
        incrementItemQuantity: (state, action) => {
            state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }

                return item;
            });
        },
        decrementItemQuantity: (state, action) => {
            state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity -= 1;
                }

                return item;
            });
        },
        updateOrderAmount: (state, action) => {
            state.totalAmount += action.payload.totalAmount;
            state.totalDiscount += action.payload.totalDiscount;
            state.grandTotal += action.payload.grandTotal;
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    updateOrderAmount,
    removeAllItems
} = cartSlice.actions;
export default cartSlice.reducer;