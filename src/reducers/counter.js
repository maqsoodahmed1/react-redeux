const counterReducer = (state = 0,action) =>{
    switch(action.type){
        case 'INCREMENT':
        console.log('the action data =>',action.data)    
        return state = state + 1;
        case 'DECREMENT':
            console.log('the decrement data =>',action.data)
            return state= state-1
        default:
            return state
    }
}

export default counterReducer;