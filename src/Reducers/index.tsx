import {combineReducers} from "redux";
import donatorsReducer from "./DonatorsReducer";
import paymentsReducer from "./PaymentsReducer";
import {authorReducer} from "./AuthorReducer";
import mainInfoReducer from "./MainInfoReducer";

const rootReducer = combineReducers({
  mainInfo: mainInfoReducer,
  donators: donatorsReducer,
  payments: paymentsReducer,
  author: authorReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;