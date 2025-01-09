import { Link } from "react-router-dom"

export type SelectedAdminSidebarType = "Dashboard" | "Problems" | "Users" | "Contests" | "Reports"
type LinkType = "admin-dashboard" | "admin-problems" | "admin-users" | "admin-contests" | "admin-reports"

export const SideBar = ({name} : {name : SelectedAdminSidebarType}) => {
    return <div className="overflow-y-auto overflow-x-hidden h-[calc(100vh-3.5rem)] border-x">
        <div className="p-4 h-full w-full justify-center">
            <SideComp title="Dashboard" isSelected={(name === "Dashboard") ? true : false} link={"admin-dashboard"}/>
            <SideComp title="Problems" isSelected={(name === "Problems") ? true : false} link={"admin-problems"}/>
            <SideComp title="Users" isSelected={(name === "Users") ? true : false} link={"admin-users"}/>
            <SideComp title="Contests" isSelected={(name === "Contests") ? true : false} link={"admin-contests"}/>
            <SideComp title="Reports" isSelected={(name === "Reports") ? true : false} link={"admin-reports"}/>
        </div>
        
        
    </div>
}

export const SideComp = ({title, isSelected, link} : {title : string, isSelected? : boolean, link : LinkType}) => {
    return <Link to={`/${link}`}>
    <div className={`px-2 py-4 flex justify-start items-start rounded-md mt-2 ${isSelected ? "bg-green-500" : "bg-green-300"}`}>
        {title}
    </div>
    </Link> 
}