import { User_Data, User_Delete, User_Update, Update_Item } from "./userType";
const initialState = {
    data: [],
    userData: {}
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
        case User_Update:
            const updatedList = state.data.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                }
                return user
            })
            return {
                ...state,
                data: updatedList
            }
        default: return state;
    }
}

export default userReducer;