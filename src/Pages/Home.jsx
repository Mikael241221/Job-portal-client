import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      console.log(data)
    })
  },[])
   const [query, setQuery] =useState("");
    const handleInputChange = (event) => {
     setQuery(event.target.value)
     
    }
    
  return (
    <div> 
      <Banner query ={query} handleInputChange={handleInputChange}/>
    </div>
  )
}

export default Home
