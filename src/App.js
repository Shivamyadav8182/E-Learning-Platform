import React, { useEffect, useState } from "react";
import {apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import "./App.css";

const App = () => {
 
  const [courses,setCourse] = useState({});
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)

     useEffect( () => { 
  const fetchData = async() => {
    setLoading(true);
    try{
     const res = await fetch(apiUrl);

     const data = await res.json();
     //save data into a variable
     setCourse(data.data);
    }
    catch(error){
        console.log("something went wrong ");
    }
    setLoading(false);
  }
  fetchData();
     } ,[])


     
  return (
    <div  className="app">
      <div>
            <Navbar />
      </div>
      
       <div>
       <Filter filterData={filterData}
        category = {category}
        setCategory = {setCategory}
       />

       </div>
      
     <div>
        {loading ? (
          <Spinner />
        ) : (
           <Cards courses={courses} category = {category} />
        )}
      </div>

    </div>
  );
};

export default App;