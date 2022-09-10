import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPosts, IUser} from "../../models/IUser";

interface UserState {
    users: IUser[],
    posts: IPosts[],
    searchValue: string

}
const initialState: UserState = {
    users: [],
    posts: [],
    searchValue: '',
}



export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userFetchSuccess(state, action: PayloadAction<IUser[]>){
            state.users = action.payload
        },
        postsFetchSuccess(state, action: PayloadAction<IPosts[]>){
            state.posts = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>){
            state.searchValue = action.payload
        }
    }

})

export const {userFetchSuccess,postsFetchSuccess,setSearchValue} = userSlice.actions
export default userSlice.reducer