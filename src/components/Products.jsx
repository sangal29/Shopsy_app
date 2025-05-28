import { useState } from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

function Products() {
    const products = useSelector(state => state.productsSlice.products);
    const [filteredProducts, setFilteredProducts] = useState(products);

    return (
        <section className="mt-20 min-[500px]:mt-28 px-5 min-[500px]:px-10">
            <article className="relative">
                <h1 className="text-3xl min-[500px]:text-4xl font-bold after:absolute after:w-20 after:h-[6px] after:rounded-lg after:bg-purple-700 after:-bottom-2 after:left-0">Products</h1>
            </article>
            <SearchBar baseData={products} setFilteredData={setFilteredProducts} />
            <ProductList filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
        </section>
    )
}

export default Products;