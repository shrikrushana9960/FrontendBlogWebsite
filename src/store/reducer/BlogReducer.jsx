import {data} from "../../data/dummyData"
import { ADD_Data } from "../actions/BlogActions";

const initalState = {
 data: data,
};
export default (state = initalState, action) => {
  switch (action.type) {
    case ADD_Data:
      const newData = {
       _id:Math.random().toString(),
        username:action.data.username,
        title:action.data.title,
        desc:action.data.desc,
        photo:action.data.photo
      };

      return { ...state, data: state.data.concat(newData) };
  }
  return state;
};
