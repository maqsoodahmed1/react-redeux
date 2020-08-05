import { Provider } from "react-redux"

 export  const increment = (value) =>{
     console.log('the value =>',value)
    return {
        type:'INCREMENT',
        data:value
    }
}

export const decrement = (value) =>{
    return {
        type:'DECREMENT',
        data:value
    }
}