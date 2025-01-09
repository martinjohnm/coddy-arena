import { NavBar } from "../../components/admin/NavBar/NavBar"
import { Problems } from "../../components/admin/Problems/Problems"
import { SideBar } from "../../components/admin/SideBar"



export const ProblemsPageAdmin = () => {
    return <div className="h-screen">
                    <NavBar/>
                    <div className="grid grid-cols-7 border-x">
                        <div className="col-span-1">
                            <SideBar name="Problems"/>
                        </div>
                        <div className="col-span-6">
                            <Problems/>
                        </div>
                    </div>
        </div>
}