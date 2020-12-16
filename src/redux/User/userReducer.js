import { User_Data, User_Delete } from "./userType";
const initialState = {
    data: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case User_Data: return {
            ...state,
            data: [...state.data, action.payload]
        }
        case User_Delete: return {
            ...state,
            data: state.data.filter((data) => data.id !== action.payload)
        }
        case User_Update: return {
            ...state,
            data: state.data.filter((data) => data.id !== action.payload)
        }
        default: return state;
    }
}

export default userReducer;