import React, {FC, useEffect, useState} from "react";
import {Header} from "../header/Header";
import {Content} from "../content/Content";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchUsers} from "../../store/reducer/ActionCreators";
import {Pagination} from "../pagination/Pagination";
import {IUser} from "../../models/IUser";


export const HomeWindow: FC = () => {
    const [currencyPage, setCurrencyPage] = useState<number>(1);
    const [itemPerPage] = useState<number>(4);
    const [sortByName, setSortByName] = useState<IUser[]>([]);
    const [checkSortByName, setCheckSortByName] = useState<boolean>(false);

    const {users, searchValue, posts} = useAppSelector((state) => state.userReducer)

    const dispatch = useAppDispatch();

    const filteredUsers = users.filter((user) => {
        if (searchValue === '') {
            return user
        } else if (user.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return user
        }
    })

    useEffect(() => {
        if (sortByName.length < 1) {
            dispatch(fetchUsers())
        }
        if (users.length > 1) {
            setSortByName(users)
        }
    }, [users])

    const indexOfLastUser = currencyPage * itemPerPage;
    const indexOfFirstUser = indexOfLastUser - itemPerPage;
    const currentUsers = sortByName.slice(indexOfFirstUser, indexOfLastUser);

    const sortName = () => {
        const userCopy: IUser[] = [...users]
        const sortedUserCopy = userCopy.sort((userA, userB) => {
            if (userA.name < userB.name) return -1;
            if (userA.name > userB.name) return 1;
            return 0;
        });
        if (checkSortByName) {
            setSortByName(users)
            setCheckSortByName(!checkSortByName)
        } else if (!checkSortByName) {
            setSortByName(sortedUserCopy)
            setCheckSortByName(!checkSortByName)
        }
    }
    return (
        <div>
            <Header sortName={sortName}/>
            <Content searchValue={searchValue} filteredUsers={filteredUsers} users={currentUsers} posts={posts}/>
            <Pagination currencyPage={currencyPage} setCurrencyPage={setCurrencyPage} users={filteredUsers}/>
        </div>
    );
}