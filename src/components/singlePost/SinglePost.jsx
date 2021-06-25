import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useSelector, useDispatch } from "react-redux";
export default function SinglePost() {
   const data = useSelector((state) => state.blogdata.data);
  const location=useLocation();
  const path=location.pathname.split('/')[2];
  const post=data.find(item=>item.title.toString()===path);
  console.log(post)
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
       {post.photo&& <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />}
        <h1 className="singlePostTitle">
          {post.title}
          
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              
                {post.username}
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
         {post.desc}
         
        
        </p>
      </div>
    </div>
  );
}
