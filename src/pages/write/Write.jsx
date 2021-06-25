import "./write.css";
import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as blogActions from "../../store/actions/BlogActions"
export default function Write() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [imgUrl, setImgUrl] = useState(
    "https://media.istockphoto.com/photos/cup-of-green-tea-picture-id478987868?k=6&m=478987868&s=612x612&w=0&h=1BkO2o24bOkOtMVofkRrFrQC77oH8JvJ9Ahd1YPbvuw="
  );
  const [name,setName]=useState("");
  const dispatch = useDispatch(); 
  const history = useHistory();

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(title===""||desc===""||imgUrl===""||name==="")
    {
      alert("Please Write Properly and fill all fields");
    }
    else
    {
      let blog={
        username:name,
        title:title,
        photo:imgUrl,
        desc:desc
      }

       dispatch(blogActions.addData(blog))
        history.push("/blogs");
      

    }
  }
  return (
    <div className="write">
      <form  onSubmit={handleSubmit} className="writeForm">
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Main Image URL"
            type="text"
            onChange={(e) => setImgUrl(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            autoFocus={true}
          />
        </div>
        <button type="submit"  className="writeSubmit" >
          Publish
        </button>
      </form>
    </div>
  );
}
