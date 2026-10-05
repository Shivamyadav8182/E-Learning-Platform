import React from "react";
import "./Filter.css";

const Filter = ({ filterData, category, setCategory }) => {

  return (
    <div className="filter-container">

      {filterData.map((data) => {
        return (
          <button
            className={`filter-btn ${
              category === data.title ? "active" : ""
            }`}
            key={data.id}
            onClick={() => setCategory(data.title)}
          >
            {data.title}
          </button>
        );
      })}

    </div>
  );
};

export default Filter;