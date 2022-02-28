import { combineReducers } from "redux";

const initState = [];
export const calorieReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [
        ...state,
        { ...action.entry, id: Math.floor(Math.random() * 99) }
      ];
    case "DELETE_ENTRY":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  calorie: calorieReducer
});
