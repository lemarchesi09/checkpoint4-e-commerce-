import { Link } from "react-router-dom"
import { useUserContext } from "../context/userContext"

export const Home = () =>{
    const {user, setUser} = useUserContext();
    return(
        <div>
            {user?.role  ? <Link to="/create">Create</Link> : <></>}
            
        </div>
    )
}