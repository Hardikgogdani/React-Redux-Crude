import {User_Data} from "./userType";
const initialState = {
    data :[]
}
const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case User_Data: return{
            data: action.payload
        }
        default: return  state;
    }
}

export  default  userReducer;