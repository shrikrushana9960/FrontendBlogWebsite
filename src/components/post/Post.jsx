import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to={`/blogs/${post.title}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
       
      </div>
      <p className="postDesc" >{post.desc}</p>
    </div>
  );
}
