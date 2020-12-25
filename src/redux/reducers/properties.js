import { FETCH_ALL, ADD, REMOVE } from "../constants/actionTypes";
import * as api from "../../api/property";

const initState = api.FetchProperties();

const properties = (properties = initState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      // return all properties
      return properties;

    case ADD:
      // add only if not exist in saved properties list
      const foundDuplicate = properties.saved.indexOf(action.payload);
      if (foundDuplicate < 0) {
        const savedProperties = [...properties.saved, action.payload];
        properties.saved = savedProperties;
      }
      return properties;

    case REMOVE:
      // remove from saved properties list
      const removeProperties = properties.saved;
      properties.saved = removeProperties.filter(
        (property) => property.id !== action.payload.id
      );
      return properties;

    default:
      return properties;
  }
};

export default properties;
