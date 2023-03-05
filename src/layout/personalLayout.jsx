import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import { Outlet ,Routes , Route} from "react-router-dom";
import { useState } from "react";

const PersonalLayout = ()=>{
    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <>
             <Sidebar isSidebar={isSidebar} />
                <main className="content">
                  <Topbar setIsSidebar={setIsSidebar} />
                  <Outlet />
                </main>
        </>
    )
}
export default PersonalLayout;