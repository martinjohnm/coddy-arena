import React from "react"
import { Navbar } from "../../components/user/Navbar"
import { Outlet } from "react-router-dom"




export const UserLayout : React.FC = () => {
    return <div>
            <Navbar selected="home"/>
            <Outlet /> {/* Renders child components */}
        </div>
}