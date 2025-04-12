import { Link } from "react-router-dom";
const User=({user})=>{
    const {id,name,email,phone}=user;
    const userStyle={
        border:'2px solid tomato',
        padding:'5px',
        borderRadius:'20px'
    }
    return(
        <div style={userStyle}>
        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <Link to={`/user/${id}`}> Show me Details</Link>

        </div>
    );
};
export default User;