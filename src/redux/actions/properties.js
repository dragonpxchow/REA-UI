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
