import { useContext } from "react";
import {AppContext} from './ContextHook';

function User() {
    const {setUsername} = useContext(AppContext);
    return<div>
        <input type="text" onChange={(event)=>{
            setUsername(event.target.value)
        }}/>
    </div>
}
export default User;