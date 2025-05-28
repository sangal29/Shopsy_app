/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SearchBar({ baseData, setFilteredData }) {
    const [inputText, setInputText] = useState("");

    function filterData(e) {
        e.preventDefault();
        const updatedData = baseData?.filter(data => data.title.toLowerCase().includes(inputText));
        setFilteredData(updatedData);
        setInputText("");
    }

    return (
        <section className="mt-8">
            <form action="" onSubmit={filterData} className="flex justify-center items-center gap-x-3">
                <input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    type="text"
                    placeholder="Search Products"
                    className="w-full outline-none border-2 border-purple-700 ps-2 pe-4 py-2 text-[17px] min-[500px]:text-lg rounded-md"
                />
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} className="bg-purple-700 text-white py-[15px] px-4 rounded-md text-lg" />
                </button>
            </form>
        </section>
    )
}

export default SearchBar;