import './header.scss'
import {FC} from "react";
import {useAppDispatch} from "../../hooks/redux";
import {setSearchValue} from "../../store/reducer/Reducer";

interface Sort{
    sortName:any
}


export const Header: FC<Sort> = ({sortName}) => {

    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }


    return (
        <div className='header'>
            <div onClick={sortName} >SORT</div>
            <input
                   type="text"
                   placeholder='Search...'
                   onChange={handleChange}
            />
        </div>
    );
}