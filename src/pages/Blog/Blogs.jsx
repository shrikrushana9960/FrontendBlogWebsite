import React,{useState} from 'react'
import Posts from '../../components/posts/Posts'

import { useSelector, useDispatch } from "react-redux";
import './Blogs.css'
const Blogs = () => {
    const data = useSelector((state) => state.blogdata.data);
   
    return (
      <div className="blog">
       
        <Posts posts={data} />
      </div>
    );
}

export default Blogs
