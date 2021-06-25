import Post from "../post/Post";
import "./posts.css";
import React,{useState} from 'react'
const Posts=(props)=> {

  console.log(props.posts)
  return (
    <div className="posts">
    {props.posts.map(item=> <Post key={item._id} post={item}/>)}
     
    </div>
  );
}
export default Posts;
