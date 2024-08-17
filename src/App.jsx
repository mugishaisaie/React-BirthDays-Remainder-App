
import React, { useState } from "react";
import data from "./data.js";
import List from "./List.jsx";



 function App(){
  const [people, setPeople]=useState(data)
  

  return (
    <div className="container">
      <h3>{people.length} BirthDays to Day</h3>
      <List people={people}/>
      <button className="btn btn-block" onClick={()=>setPeople([])}>Clear All</button>
     </div>
      )
}

export default App;