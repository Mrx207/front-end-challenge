import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_FILTERED_DATA,
} from "./actionTypes";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: "",
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false,
      };
    case FETCH_FILTERED_DATA:
      return {
        ...state,
        data:
          action.payload.trim() !== ""
            ? state.data.filter(({ name }) =>
                name.toLowerCase().includes(action.payload.toLowerCase())
              )
            : state.data,
        error: "",
        loading: false,
      };
    default:
      return state;
  }
};
