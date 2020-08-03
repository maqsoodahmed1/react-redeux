import { Provider } from "react-redux"

 export  const increment = () =>{
    return {
        type:'INCREMENT'
    }
}

export const decrement = () =>{
    return {
        type:'DECREMENT'
    }
}