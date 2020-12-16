import {User_Data} from './userType';
export const UserData = (data) =>{
    return {
        type:User_Data,
        payload: data
    }
}
