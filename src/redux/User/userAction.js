import { User_Data, User_Delete,User_Update } from './userType';
export const UserData = (data) => {
    return {
        type: User_Data,
        payload: data
    }
}

export const UserDelete = (data) => {
    return {
        type: User_Delete,
        payload: data
    }
}

export const UserUpdate = (data) => {
    return {
        type: User_Update,
        payload: data
    }
}