import { NavBar } from "../../components/admin/NavBar/NavBar"
import { Reports } from "../../components/admin/Reports/Reports"
import { SideBar } from "../../components/admin/SideBar"


export const ReportsPageAdmin = () => {
    return <div className="h-screen">
                    <NavBar/>
                    <div className="grid grid-cols-7 border-x">
                        <div className="col-span-1">
                            <SideBar name="Reports"/>
                        </div>
                        <div className="col-span-6">
                            <Reports/>
                        </div>
                    </div>
        </div>
}