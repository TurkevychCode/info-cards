import {FC} from "react";
import {IUser} from "../../models/IUser";
import './pagination.scss'

interface Item {
    currencyPage: number
    setCurrencyPage: any
    users: IUser[]
}

export const Pagination: FC<Item> = ({currencyPage, setCurrencyPage, users}) => {

    const nextPage = () => {
        if (currencyPage === 3) {
            return
        } else {
            setCurrencyPage(currencyPage + 1)
        }
    }
    const prevPage = () => {
        if (currencyPage === 1) {
            return
        } else {
            setCurrencyPage(currencyPage - 1)
        }
    }
    const checkLength = () => {
        return users.length < 4;

    }

    return (
        <div className='pag'>
            <button onClick={prevPage}> Prev </button>
            <button onClick={nextPage} disabled={checkLength()}>Next</button>
        </div>
    );
}