import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  //making a get request because we are receiving some info to our backend server(get)
  const res = await axios.get("/api/current-user");
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  //making a post request because we sending some info to our backend server(post)
  const res = await axios.post("/api/stripe", token);

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};
