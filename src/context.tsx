import React, { createContext, useReducer } from "react";
import { ContextData, FormFields } from "./interfaces";
import { reducer } from "./reducer";

//initial state data
const initialState: FormFields = {
  from: "",
  to: "",
  trip: "",
  departure: "",
  return: "",
  passangerClass: "",
};

// initial context data
export const contextData: ContextData = {
  state: initialState,
  dispatch: () => {},
};

//create context
export const AppContext = createContext(contextData);

//context provider
export const AppContextProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
