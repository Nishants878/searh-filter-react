import React,{useEffect, useState} from 'react'
import './App.css';
import Axios from 'axios'
import HomePage from './HomePage'
function App() {
       
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");


  useEffect(() =>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) =>{
          setData(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
  },[])

  function search (a) {
    return a.filter((b) => b.name.toLowerCase().indexOf(q) > -1);
}
  


  return (
    <div className="App">
      <div>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
         <HomePage  data={search(data)} />
    </div>
  );
}

export default App;
