import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../Footer/Footer";

const Home =()=>{
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};
export default Home;
