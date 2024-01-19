import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    const location = useLocation();
 const noNavbarFooter = location.pathname.includes("/login")
    return (
        <div>
          { noNavbarFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;