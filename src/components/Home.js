import { Link } from "react-router-dom";
import ItemListContainter from './ItemListContainter';

export const Home = () =>{

    return(
        <div>

            <ItemListContainter/>
            {/* <Link to="/create">Create</Link> */}
        </div>
    )
}