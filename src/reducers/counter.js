const counterReducer = (state = {data:{name:''}},action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state = {data:{name:"maqsood"}};
        case 'DECREMENT':
            return state= {data:{name:"ahmed"}}
        default:
            return state
    }
}

export default counterReducer;