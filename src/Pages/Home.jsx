import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data)
      setJobs(data)
    })
  },[])
  // console.log(jobs)
  // handle input change 
   const [query, setQuery] =useState("");
    const handleInputChange = (event) => {
     setQuery(event.target.value)
     
    }
    // filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    // .........Radio filtering ..........
    const handleChange = (event) => {
      selectedCategory(event.target.value)
    }
    
     // .........Button based filtering ..........
    const hanleClick = (event) => {
      selectedCategory(event.tartget.value)
    }
    // main function 
    const filteredData = (jobs, selected, query) => {
      let filteredjobs =jobs;
      // filtering input items
      if (query){
        filteredjobs = filteredItems
      }
      // category filtering
      if (selected){
        filteredjobs = filteredjobs.filter(({
        maxPrice,
        salaryType,
        jobLocation,
        postingDate,
        experienceLevel,
        employmentType,
        }) =>(
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected ) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        ));
        console.log(filteredjobs)
      }
      return filteredjobs.map((data,i) => <Card key={i} data={data}/>)
    }
    const result = filteredData(jobs, selectedCategory,query);
  return (
    <div> 
      <Banner query ={query} handleInputChange={handleInputChange}/>
      <div>
        <Jobs result ={result}/>
      </div>
    </div>
  )
}

export default Home
