import { FETCH_ALL, ADD, REMOVE } from "../constants/actionTypes";
import * as api from "../../api/property";

const initState = api.FetchProperties();

const properties = (properties = initState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return properties;
    //return action.payload; // data of properties

    case ADD:
      return [...properties, action.payload];

    case REMOVE:
      return properties; //.filter((post) => post._id !== action.payload);

    default:
      return properties;
  }
};

export default properties;
