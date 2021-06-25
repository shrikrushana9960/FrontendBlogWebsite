
import React,{useState,useEffect} from 'react';


import "./homepage.css";
import Resume from "../Resume/Resume";
import axios from 'axios';
const Homepage=() =>{
  const [posts,setPosts]=useState([]);
  
  useEffect(()=>{
    const fetechPosts=async()=>{
      const res = await axios.get("http://localhost:5000/post/");
      setPosts(res.data);
    }
    fetechPosts()
  },[])
  
  return (
    <>
     
      <div className="home">
        <Resume/>
      </div>
    </>
  );
}

export default Homepage;