import IMainInfo from "../Compenents/MainInfo/IMainInfo";
import {AllMainInfoActions, UPDATE_MAIN_INFO} from "../Actions/MainInfoActions";

interface InitialState extends IMainInfo {
}

const initialState: InitialState = {
  title: "",
  text: "",
}

export default function mainInfoReducer(state = initialState, action: AllMainInfoActions) {
  switch (action.type) {
    case UPDATE_MAIN_INFO: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: return state;
  }
}