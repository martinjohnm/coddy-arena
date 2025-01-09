import { NavBar } from "../../components/admin/NavBar/NavBar"
import { SideBar } from "../../components/admin/SideBar"
import { Users } from "../../components/admin/Users/Users"


export const UsersPageAdmin = () => {
    return <div className="h-screen">
                    <NavBar/>
                    <div className="grid grid-cols-7 border-x">
                        <div className="col-span-1">
                            <SideBar name="Users"/>
                        </div>
                        <div className="col-span-6">
                            <Users/>
                        </div>
                    </div>
        </div>
}