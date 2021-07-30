import IMainInfo from "../Compenents/MainInfo/IMainInfo";

export const UPDATE_MAIN_INFO = "UPDATE_MAIN_INFO";

interface IUpdateMainInfoAction {
  type: typeof UPDATE_MAIN_INFO;
  payload: IMainInfo;
}

export const updateMainInfo = (mainInfoData: IMainInfo): IUpdateMainInfoAction => ({
  type: UPDATE_MAIN_INFO,
  payload: mainInfoData,
})

export type AllMainInfoActions =
  IUpdateMainInfoAction;