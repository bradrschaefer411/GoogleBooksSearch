import React, { useState } from "react";

function Search(props) {
  const [searchterm, setsearchterm] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searchterm is " + searchterm);
  };
  return (
    <div className="App">
      <p>Hello</p>
      <input
        className="form-control"
        type="text"
        placeholder="Search Term"
        name="searchterm"
        value={searchterm}
        onChange={(e) => setsearchterm(e.target.value)}
      />
      <button onClick = {handleSubmit}>Search!</button>
    </div>
  );
}

export default Search;
