import { constant } from "./contants";
import { Action, FormFields } from "./interfaces";

/** Reducer that controls all the form values */
export const reducer = (state: FormFields, action: Action): FormFields => {
  switch (action.type) {
    case constant.SET_FORM:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
