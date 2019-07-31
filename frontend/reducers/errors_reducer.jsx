import sessionErrorsReducer from "./session_errors_reducer";
import { combineReducers } from "redux";


const errorsReducer = combineReducers({     
    session: sessionErrorsReducer           // ? keys represents slice of entire apps state?
});
    

export default errorsReducer;