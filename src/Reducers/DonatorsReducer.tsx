import {ADD_OR_UPDATE_DONATOR, AllDonatorsActions, DELETE_DONATOR} from "../Actions/DonatorsActions";
import {IDonator} from "../Compenents/Donators/IDonator";

interface IInitialState {
  donators: IDonator[];
}

const initialState: IInitialState = {
  donators: [],
}

export default function donatorsReducer(state = initialState, action: AllDonatorsActions) {
  switch (action.type) {
    case ADD_OR_UPDATE_DONATOR: {
      const donator = state.donators.find(d => d.id === action.payload.id);

      if (!donator) {
        return {
          ...state,
          donators: [...state.donators, action.payload],
        }
      } else {
        let donators = state.donators
          .filter(d => d.id !== action.payload.id)
          .concat(action.payload);

        return {
          ...state,
          donators,
        }
      }
    }
    case DELETE_DONATOR: {
      return {
        ...state,
        donators: state.donators.filter(d => d.id !== action.payload.id),
      }
    }
    default: return state;
  }
}
