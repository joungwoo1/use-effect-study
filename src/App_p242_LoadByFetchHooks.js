import GitUser from "./component/GitUser"; 
import GitUserByFetch from "./component/GitUserByFetch";

function LoadByFetchHooks() {
    //return (<GitUser loginId={"moonhighway"}/>)
    return (<GitUserByFetch loginId={"moonhighway"}/>)
}

export default LoadByFetchHooks;
