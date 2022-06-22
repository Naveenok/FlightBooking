import React, { useContext } from "react";
import { constant } from "./contants";
import { AppContext } from "./context";

function App() {
  //component hooks
  const { state, dispatch } = useContext(AppContext);

  //component functions
  const setForm = (name: string, value: string) => {
    dispatch({ type: constant.SET_FORM, payload: { name, value } });
  };

  // component render
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="From"
          name="from"
          value={state.from}
          onChange={(e) => setForm(e.target.name, e.target.value)}
        />
        <input type="text" placeholder="To" />
        <select>
          <option value="oneway">Oneway</option>
          <option value="multiway">Multiway</option>
        </select>
        <input type="text" placeholder="Departure" />
        <input type="text" placeholder="Return" />
        <input type="text" placeholder="Passanger / Class" />
        <button>Show Flights</button>
      </div>
    </form>
  );
}

export default App;
