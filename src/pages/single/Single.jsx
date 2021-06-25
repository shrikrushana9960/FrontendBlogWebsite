
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams } from "react-router-dom";
export default function Single() {
  const postid = useParams("id");
  console.log(postid)
  return (
    <div className="single">
      <SinglePost />
    
    </div>
  );
}
