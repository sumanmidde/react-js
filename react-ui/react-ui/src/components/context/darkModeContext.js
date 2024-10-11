import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
const INITI_STATE = {
    darkMode: false
}
export const DarkModeContext = createContext(INITI_STATE);

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITI_STATE);
    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
}