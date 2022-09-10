import {IPosts} from "../../models/IUser";
import {FC} from "react";
import './posts.scss'

interface itemPosts {
    posts: IPosts
}

export const Posts: FC<itemPosts> = ({posts}) => {
    return (
        <div className='post'>
            <div>
                <h5>Title - {posts.title}</h5>
                <p>Body - {posts.body}</p>
                <hr/>
            </div>
        </div>
    );
}