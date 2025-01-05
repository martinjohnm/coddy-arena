import { ContestComp } from "../components/ContestCompt"
import { Navbar } from "../components/Navbar"



export const Contest = () => {
    return <div>
        <Navbar selected="contests"/>
        <ContestComp/>
    </div>
}