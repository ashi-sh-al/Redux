import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { setQuery } from "../redux/features/searchSlice";


const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text))

    setText('');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
          
        }}
        className="flex bg-(--c1) p-5 gap-5"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          required
          type="text"
          placeholder="Search Anything..."
          className="border-2 w-full px-4 py-2 text-xl rounded outline-none cursor-pointer"
        />
        <button className="active:scale-95 border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
