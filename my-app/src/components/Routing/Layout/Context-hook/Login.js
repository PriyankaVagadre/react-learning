import { useContext } from "react";
import {AppContext} from './ContextHook';
function Login() {
    const {username} = useContext(AppContext);
    return<div>
<p>User Name : {username}</p>
    </div>
}
export default Login;