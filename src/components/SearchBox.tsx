import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
    // className?: string Video at 27:00
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
};

const SearchBox = (props: Props) => {
  return (
    <form onSubmit={props.onSubmit} className="flex relative items-center justify-center h-10">
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder="Search location..."
        className="px-4 py-2 rounded-l-md w-[230px] border-gray-300 focus:outline-none focus:border-blue-500 h-full border-4"
      />
      <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-400 h-full">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBox;
