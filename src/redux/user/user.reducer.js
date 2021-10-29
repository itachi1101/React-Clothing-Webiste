// get's state representing last or initial state  and also an action 
// action is an object that has action and payloads(optional) // payload can be anything
const INITIAL_STATE={
    currentUser:null
}
const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser=action.payload
            }
        default:
            return state; 
    }
}

export default userReducer