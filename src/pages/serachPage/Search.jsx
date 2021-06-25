import React,{useState} from 'react'
import './Search.css'
import Posts from "../../components/posts/Posts";

import { useSelector, useDispatch } from "react-redux";
const Search = () => {
 const data = useSelector((state) => state.blogdata.data);
const [blogs,setBlogs]=useState([])
 const [search, setSearch] = useState("");
 const handleSearch = (e) => {
   e.preventDefault();
    const post = data.find((item) => item.title.toString() === search);
    setBlogs([post])
 };
    return (
        <>
         <form class="bar" onSubmit={handleSearch}>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search.."
            name="search2"
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      <div className="blog">
       
       {blogs.length==0?<h1>NO Post</h1>: <Posts posts={blogs} />}
      </div>
      </>
    );
}

export default Search
