import { FETCH_ALL, ADD, REMOVE } from "../constants/actionTypes";
import * as api from "../../api/property";

const initState = api.FetchProperties();

const properties = (properties = initState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return properties;
    //return action.payload; // data of properties

    case ADD:
      //console.log("addReducer ", action.payload);
      //console.log("properties>>>>>", properties);
      // return properties.results.filter(
      //   (property) => property.id !== action.payload.id
      //);
      const savedProperties = [...properties.saved, action.payload];
      //console.log("savedProperties", savedProperties);
      properties.saved = savedProperties;
      return properties;

    case REMOVE:
      console.log("removeReducer ", action.payload.id);
      const removeProperties = properties.saved;
      console.log("savedProperties", removeProperties);

      properties.saved = removeProperties.filter(
        (property) => property.id === action.payload.id
      );
      return properties;

    default:
      return properties;
  }
};

export default properties;
