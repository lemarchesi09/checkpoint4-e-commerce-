import { Link } from "react-router-dom"

import { useUserContext } from "../context/userContext"
import ItemListContainter from './ItemListContainter'
export const Home = () =>{
    const {user, setUser} = useUserContext();
    return(
        <div>

            {user?.role  ? <Link to="/create">Create</Link> : <></>}

            <ItemListContainter/>
            {/* <Link to="/create">Create</Link> */}
        </div>
    )
}