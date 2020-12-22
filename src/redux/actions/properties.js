import * as api from "../../api/property";
import { FETCH_ALL, ADD, REMOVE } from "../constants/actionTypes";

export const getProperties = () => async (dispatch) => {
  try {
    //fetch all properties
    const data = await api.FetchProperties();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const addProperty = (property) => async (dispatch) => {
  try {
    // in real-time app, it should add to db first
    // add a property to saved property list
    const action = { type: ADD, payload: property };
    dispatch(action);
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const removeProperty = (property) => async (dispatch) => {
  try {
    // in real-time app, it should remove from db first
    // remove a property from saved properties list
    const action = { type: REMOVE, payload: property };
    dispatch(action);
  } catch (error) {
    console.log({ message: error.message });
  }
};
