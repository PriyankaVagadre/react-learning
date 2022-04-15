import Login from "./Login";
import User from "./User";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function ContextHook() {
const [username, setUsername]= useState('');

    return <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
    </AppContext.Provider>
}
export default ContextHook;