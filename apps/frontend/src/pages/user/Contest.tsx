import { useNavigate } from "react-router-dom"
import { ContestComp } from "../../components/user/ContestCompt"
import { Navbar } from "../../components/user/Navbar"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"



export const Contest = () => {
    const user = useUser()
    const navi = useNavigate()
    useEffect(() => {
      if (!user) {
        navi("/login")
      }
    },[user])
    return <div>
        <Navbar selected="contests"/>
        <ContestComp/>
    </div>
}