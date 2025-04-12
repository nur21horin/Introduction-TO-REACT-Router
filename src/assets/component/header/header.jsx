import { Link } from "react-router-dom";
import './header.css';
const Header=()=>{
    return (
        <div>
        <h2>Navbar</h2>
        <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/users'}>Users</Link> 
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact Us</Link> 
        <Link to={'/user/:userId'}>Show User Details</Link>
        </nav>
        </div>
    );
};
export default Header;