import { ContestComp } from "../../components/user/ContestCompt"
import { Navbar } from "../../components/user/Navbar"



export const Contest = () => {
    return <div>
        <Navbar selected="contests"/>
        <ContestComp/>
    </div>
}