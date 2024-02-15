import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_FILTERED_DATA,
} from "./actionTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchFilteredData = (input) => {
  return {
    type: FETCH_FILTERED_DATA,
    payload: input,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://600eda693bb1d100179e04dc.mockapi.io/api/v1/packages")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        fetchUserFailure(errorMsg);
      });
  };
};
