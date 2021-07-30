import IPayment from "../Compenents/Payments/IPayment";

export const ADD_PAYMENT = "ADD_PAYMENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const DELETE_PAYMENT = "DELETE_PAYMENT";

interface IAddPaymentAction {
  type: typeof ADD_PAYMENT,
  payload: IPayment,
}

interface IUpdatePaymentAction {
  type: typeof UPDATE_PAYMENT,
  payload: IPayment,
}

interface IDeletePaymentAction {
  type: typeof DELETE_PAYMENT,
  payload: IPayment,
}

export const addPayment = (paymentData: IPayment): IAddPaymentAction => ({
  type: ADD_PAYMENT,
  payload: paymentData,
});

export const updatePayment = (paymentData: IPayment): IUpdatePaymentAction => ({
  type: UPDATE_PAYMENT,
  payload: paymentData,
});

export const deletePayment = (paymentData: IPayment): IDeletePaymentAction => ({
  type: DELETE_PAYMENT,
  payload: paymentData,
});

export type AllPaymentsActions =
  IAddPaymentAction
  | IUpdatePaymentAction
  | IDeletePaymentAction;