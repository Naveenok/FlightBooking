import { Dispatch } from "react";

export interface FormFields {
  from: string;
  to: string;
  trip: string;
  departure: string;
  return: string;
  passengerClass: string;
}

export interface ContextData {
  state: FormFields;
  dispatch: Dispatch<Action>;
}

export interface Action {
  type: string;
  payload: {
    name: string;
    value: string;
  };
}
