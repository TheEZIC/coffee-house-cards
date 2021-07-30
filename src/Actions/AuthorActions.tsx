import IAuthor from "../Compenents/Author/IAuthor";

export const UPDATE_AUTHOR = "UPDATE_AUTHOR";

interface IUpdateAuthorAction {
  type: typeof UPDATE_AUTHOR,
  payload: IAuthor,
}

export const updateAuthor = (authorData: IAuthor): IUpdateAuthorAction => ({
  type: UPDATE_AUTHOR,
  payload: authorData,
})

export type AllAuthorActions =
  IUpdateAuthorAction;
