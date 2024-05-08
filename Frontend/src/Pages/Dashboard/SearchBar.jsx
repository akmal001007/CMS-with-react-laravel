import React from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
    const { addButton = "true" } = props;
    return (
        <div className="flex items-center w-full mb-4">
            <input
                type="text"
                placeholder="Search by id or name"
                className="px-4 py-2 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-buttonColor w-full"
            />
            <button
                className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg
             hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Search
            </button>
            {addButton == "true" ? (
                // <button
                //         className="px-4 py-2 ml-2 text-white bg-buttonColor rounded-lg
                //     hover:bg-orange-600 focus:outline-none focus:bg-orange-800"
                //     >
                //         Add
                // </button>
                <Link
                    to="/users/new"
                    className="px-4 py-2 ml-1 text-white rounded-lg bg-buttonColor
                     hover:bg-orange-600 focus:outline-none focus:bg-orange-800"
                >
                    Add{" "}
                </Link>
            ) : (
                ""
            )}
        </div>
    );
};

export default SearchBar;
