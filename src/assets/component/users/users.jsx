import { useLoaderData } from "react-router-dom";
import User from "../user/user";
import './users.css';

const Users=()=>{
    //state-->data
    //state-->loader
    //use effect
    //fetch-->State set
    const users=useLoaderData();
    console.log(users);
    return(
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>Fantastic and vodro Users</p>
            <div className="user">
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
           
        </div>
    );
};
export default Users;