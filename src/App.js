import React, { useState, useEffect } from "react";
import './App.css';
import fetchCategories from "./api";

function App() {
  const [categories, setCategories] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="app-container">
      <input
        type="text"
        placeholder="Filter categories"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((category, index) => (
            <tr key={index}>
              <td>{category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
