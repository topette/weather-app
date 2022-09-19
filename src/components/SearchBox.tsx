import { FormEvent, useRef, useState, useEffect } from "react";

export const SearchBox = ({handleSearch,}: {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };

  useEffect(() => {
    inputRef.current?.focus()
    }, [])


  return (
    <form
      id="form"
      onSubmit={(e) => {
        handleSearch(e, search);
        setSearch("");
      }}
    >
      <label htmlFor="search"></label>
      <input
      ref={inputRef}
      autoComplete="off"
      id="search"
      name="search"
      value={search}
      type="search"
      placeholder="Find city or location..."
      className="absolute w-72 h-12 p-3 rounded-full mt-8"
      onChange={handleChange}
      />
    </form>
  );
};
