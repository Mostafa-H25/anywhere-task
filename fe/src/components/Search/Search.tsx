import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      <form className="search">
        <span>
          <SearchIcon />
        </span>
        <input type="text" name="search" id="search" placeholder="Search" />
      </form>
    </>
  );
};

export default Search;
