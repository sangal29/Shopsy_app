/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProducts } from "../utils/store/slices/productsSlice";
import useFetch from "../utils/hooks/useFetch";
import ProductListShimmerUI from "./ProductListShimmerUI";

function ProductList({ filteredProducts, setFilteredProducts }) {
    const products = useSelector(state => state.productsSlice.products);
    const dispatch = useDispatch();
    const { data, loading, error } = useFetch("https://dummyjson.com/products");

    useEffect(() => {
        if (products.length === 0 && !loading) {
            localStorage.setItem("products", JSON.stringify(data?.products));
            dispatch(addProducts(data?.products));
        }
    }, [data]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    if (loading) {
        return <ProductListShimmerUI />;
    }

    if (error) {
        return "Error";
    }

    return (
        <section className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-10">
            {
                filteredProducts.length ?
                    filteredProducts?.map(product => <ProductItem key={product.id} data={product} />)
                    :
                    <h2 className="text-2xl font-bold">No Products Found!</h2>
            }
        </section>
    )
}

export default ProductList;