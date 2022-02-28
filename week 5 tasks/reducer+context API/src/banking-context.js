import { createContext, useReducer } from "react";

export const BankingContext = createContext();
const bankingReducer = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return state - parseInt(action.amount);
    case "DEPOSIT":
      return state + parseInt(action.amount);
    case "FD":
      return state * 1.05;
    case "DELETE":
      return 0;
    default:
      return state;
  }
};

export const BankingContextProvider = (props) => {
  const [balance, dispatch] = useReducer(bankingReducer, 0);
  return (
    <BankingContext.Provider value={{ balance, dispatch }}>
      {props.children}
    </BankingContext.Provider>
  );
};
