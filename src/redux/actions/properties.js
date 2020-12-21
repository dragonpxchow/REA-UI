import * as api from "../../api/property";
import { FETCH_ALL, ADD, REMOVE } from "../constants/actionTypes";

export const getProperties = () => async (dispatch) => {
  try {
    const data = await api.FetchProperties();
    //console.log("data >>>>>>>>>>>>>>>>>", data);
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const addProperty = (property) => async (dispatch) => {
  try {
    // in real-time app, it should add to db
    //console.log("addProperty >>>>>>>>>>>>>>>>", property);
    const action = { type: ADD, payload: property };
    dispatch(action);
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const removeProperty = (property) => async (dispatch) => {
  try {
    // in real-time app, it should remove from db
    console.log("removeProperty >>>>>>>>>>>>>>>>", property);
    const action = { type: REMOVE, payload: property };
    dispatch(action);
  } catch (error) {
    console.log({ message: error.message });
  }
};
