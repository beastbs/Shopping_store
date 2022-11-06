import "./SearchPanel.scss";

const SearchPanel = () => {
  return (
    <div className="search">
      <form className="search__form">
        <input className="search__input" type="text" placeholder="Find goods" />
      </form>
    </div>
  );
};

export default SearchPanel;
