import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () =>{
    return(
        <div className="main-body">
            
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Body;