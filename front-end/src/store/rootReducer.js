import { combineReducers } from "redux";

import user from "./User/reducer.js";
import timeOff from "./TimeOff/reducer.js";
import shift from "./Shift/reducer.js";
import hourOfOperation from "./HoO/reducer.js";
import employer from "./Employer/reducer.js";
import employee from "./Employee/reducer.js";
import contact from "./Contact/reducer.js";
import calendarDay from "./CalendarDay/reducer.js";
import availability from "./Availability/reducer.js";

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
