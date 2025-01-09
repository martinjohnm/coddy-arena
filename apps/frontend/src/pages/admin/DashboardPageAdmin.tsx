import { Dashboard } from "../../components/admin/Dashboard/Dashboard"
import { NavBar } from "../../components/admin/NavBar/NavBar"
import { SideBar } from "../../components/admin/SideBar"



export const DashboardPageAdmin = () => {
    return <div className="h-screen">
                    <NavBar/>
                    <div className="grid grid-cols-7 border-x">
                            <div className="col-span-1">
                                <SideBar name="Dashboard"/>
                            </div>
                            <div className="col-span-6">
                                <Dashboard/>
                            </div>
                    </div>
        </div>
}