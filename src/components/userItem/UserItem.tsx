import {FC} from "react";
import {IUser} from "../../models/IUser";
import './userItem.scss'
import {fetchPosts} from "../../store/reducer/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";
export interface ItemProps {
    user: IUser
}

export const UserItem: FC<ItemProps> = ({user}) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(fetchPosts(user.id))
    }

    return (
        <div className='items-post'>
            <div>
                <h3>Name - {user.name}</h3>
                <h4>Email - {user.email}</h4>
                <h5>Phone - {user.phone}</h5>
                <button onClick={handleClick}>Info Posts
                </button>
            </div>
        </div>
    );
}