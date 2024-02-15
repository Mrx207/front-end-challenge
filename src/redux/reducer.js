import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_FILTERED_DATA,
} from "./actionTypes";

const initialState = {
  loading: true,
  data: [],
  filteredData: [],
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
        filteredData: action.payload,
        error: "",
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        filteredData: [],
        error: action.payload,
        loading: false,
      };
    case FETCH_FILTERED_DATA:
      const searchTerm = action.payload.toLowerCase();
      // If search term is empty, return original data
      if (!searchTerm.trim()) {
        return { ...state, filteredData: state.data };
      }
      // Otherwise, filter the data based on the search term
      const filteredData = state.data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      return { ...state, filteredData };
    default:
      return state;
  }
};
