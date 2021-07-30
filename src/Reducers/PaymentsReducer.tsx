import {ADD_PAYMENT, AllPaymentsActions, DELETE_PAYMENT, UPDATE_PAYMENT} from "../Actions/PaymentsActions";
import IPayment from "../Compenents/Payments/IPayment";

interface IInitialState {
  payments: IPayment[];
}

const initialState: IInitialState = {
  payments: [],
}

export default function paymentsReducer(state = initialState, action: AllPaymentsActions) {
  switch (action.type) {
    case ADD_PAYMENT: {
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };
    }
    case UPDATE_PAYMENT: {
      const payments = state.payments
        .filter(p => p.id !== action.payload.id)
        .concat(action.payload);

      return {
        ...state,
        payments,
      };
    }
    case DELETE_PAYMENT: {
      return {
        ...state,
        payments: state.payments.filter(p => p.id !== action.payload.id),
      };
    }
    default: return state;
  }
}