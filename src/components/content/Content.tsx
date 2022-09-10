import {FC} from "react";
import {UserItem} from "../userItem/UserItem";
import './content.scss'
import {IPosts, IUser} from "../../models/IUser";
import {Posts} from "../posts/Posts";


export interface ItemProps {
    users: IUser[]
    posts: IPosts[]
    filteredUsers: IUser[]
    searchValue: string
}

export const Content: FC<ItemProps> = ({users, posts, filteredUsers, searchValue}) => {


    return (
        <div className='container'>
            <div className='container-content'>
                {searchValue.length > 1 ? filteredUsers.map(user => <UserItem user={user} key={user.id}/>) :
                    users && users.map(user => <UserItem user={user} key={user.id}/>)
                }
            </div>
            <div className='container-content-posts'>
                {
                    posts.map(post => <Posts posts={post} key={post.id}/>)
                }
            </div>
        </div>
    );
}