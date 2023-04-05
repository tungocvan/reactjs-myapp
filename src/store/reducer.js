import { SET_USER } from "./constants";
const initState={
    todos:[],
    todoInput:'',
    user:{
        isLogged:false
    }
}


function reduce(state,action) {
    switch (action.type) {
        case SET_USER:
            console.log('user reducer:',action.payload);
            return {
                ...state,
                user:{
                    isLogged:true
                }
            }
    
        default:
            break;
    }
}
export {initState}
export default reduce