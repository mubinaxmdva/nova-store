import { FiSearch } from "react-icons/fi";

function SearchBar({
  value = "",
  onChange,
  placeholder = "Search products...",
}) {
  return (
    <div className="flex justify-center ">
      <div className="relative w-full ">
        <input
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 pr-12 text-sm text-gray-700 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          type="text"
          placeholder={placeholder}
        />

        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
      </div>
    </div>
  );
}

export default SearchBar;
