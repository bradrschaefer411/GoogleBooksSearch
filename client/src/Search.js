import React, { useState } from "react";
import axios from 'axios';

function Search(props) {
  const [searchterm, setsearchterm] = useState();
    const [results, setresults] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searchterm is " + searchterm);
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchterm)
      .then((res) => setresults(res.data.items))
      .catch((err) => console.log(err));
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
      {results.map(function (book){
        console.log(book);
        return (
        <div>
        <h1>{book.volumeInfo.title}</h1>
        <h2>{book.volumeInfo.authors}</h2>
        <h6>{book.volumeInfo.description}</h6>
        <h4><img src={book.volumeInfo.imageLinks.thumbnail}></img></h4>
        <a href={book.volumeInfo.infoLink}>Click here to view</a>
        <hr></hr>
        </div>
        )
      })}
    </div>
  );
}

export default Search;
