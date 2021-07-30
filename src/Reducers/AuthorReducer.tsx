import IAuthor from "../Compenents/Author/IAuthor";
import {AllAuthorActions, UPDATE_AUTHOR} from "../Actions/AuthorActions";

interface IInitialState extends IAuthor {
}

const initialState: IInitialState = {
  nickname: "",
  tag: "",
  avatar: "",
  text: "",
}

export function authorReducer(state = initialState, action: AllAuthorActions) {
  switch (action.type) {
    case UPDATE_AUTHOR: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: return state;
  }
}