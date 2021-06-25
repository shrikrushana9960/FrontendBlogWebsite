export const ADD_Data = "ADD_Data";

export const addData = (blogItem) => {
  return {
    type: ADD_Data,
    data: blogItem
  };
};
