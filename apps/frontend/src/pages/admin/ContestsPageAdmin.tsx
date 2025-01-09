import { Contests } from "../../components/admin/Contests/Contests"
import { NavBar } from "../../components/admin/NavBar/NavBar"
import { SideBar } from "../../components/admin/SideBar"


export const ContestsPageAdmin = () => {
    return <div className="h-screen">
                <NavBar/>
                <div className="grid grid-cols-7 border-x">
                        <div className="col-span-1">
                            <SideBar name="Contests"/>
                        </div>
                        <div className="col-span-6">
                            <Contests/>
                        </div>
                </div>
    </div>
}