import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";
import { FormEvent } from "react";

interface SearchBarProps{
  onSearch:(searchImg: string)=>void;
}

const SearchBar:React.FC<SearchBarProps>=({ onSearch }) =>{
  const handleSubmit = (evt:FormEvent<HTMLFormElement>) :void=> {
    evt.preventDefault();
    const form = evt.currentTarget as HTMLFormElement;
    const searchImg = form.elements.namedItem('searchImg') as HTMLInputElement;

    if (searchImg.value.trim() === "") {
      toast("Please enter text in the field", {
        style: {
          color: 'red',  
        },
        duration: 4000,
          position: "top-right", 
      });
      return;
    }

    onSearch(searchImg.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchImg"
           autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}


export default SearchBar;