import {IDonator} from "../Compenents/Donators/IDonator";

export const ADD_OR_UPDATE_DONATOR = "ADD_OR_UPDATE_DONATOR";
export const DELETE_DONATOR = "DELETE_DONATOR";

interface IAddOrUpdateDonatorAction {
  type: typeof ADD_OR_UPDATE_DONATOR;
  payload: IDonator;
}

interface IDeleteDonatorAction {
  type: typeof DELETE_DONATOR,
  payload: IDonator;
}

export const addOrUpdateDonator = (donatorData: IDonator): IAddOrUpdateDonatorAction => ({
  type: ADD_OR_UPDATE_DONATOR,
  payload: donatorData,
})

export const deleteDonator = (donatorData: IDonator): IDeleteDonatorAction => ({
  type: DELETE_DONATOR,
  payload: donatorData,
})

export type AllDonatorsActions =
  IAddOrUpdateDonatorAction
  | IDeleteDonatorAction;