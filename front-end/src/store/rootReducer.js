import { combineReducers } from "redux";

import user from "./user/reducer.js";
import timeOff from "./timeOff/reducer.js";
import shift from "./shift/reducer.js";
import hourOfOperation from "./hourOfOperation/reducer.js";
import employer from "./employer/reducer.js";
import employee from "./employee/reducer.js";
import contact from "./contact/reducer.js";
import calendarDay from "./calendarDay/reducer.js";
import availability from "./availability/reducer.js";

export const rootReducer = combineReducers({
  user,
  timeOff,
  shift,
  hourOfOperation,
  employee,
  employer,
  contact,
  calendarDay,
  availability,
});
