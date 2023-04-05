import { useReducer } from "react";
import  Context  from "./Context";
import reducer,{initState} from "./reducer"; 

function Provider({ children }) {
    const [state, Dispatch] = useReducer(reducer,initState)
    return (
        <Context.Provider value={[state, Dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider