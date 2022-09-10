import {AppDispatch} from "../store";
import {IPosts, IUser} from "../../models/IUser";
import axios from "axios";
import {postsFetchSuccess, userFetchSuccess} from "./Reducer";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userFetchSuccess(response.data))
    }catch (e){
        console.log(e)
    }
}
export const fetchPosts = (id:number) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IPosts[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        dispatch(postsFetchSuccess(response.data))
    }catch (e){
        console.log(e)
    }
}