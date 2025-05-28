import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../store/slices/productsSlice";
import cartSlice from "../store/slices/cartSlice";

const productsStore = configureStore({
    reducer: {
        productsSlice: productsSlice,
        cartSlice: cartSlice
    }
});

export default productsStore;