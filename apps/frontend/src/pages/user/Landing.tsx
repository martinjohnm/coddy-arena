import { LandingComp } from "../../components/user/LandingComp"
import { Navbar } from "../../components/user/Navbar"



export const Landing = () => {
    return <div>
        <Navbar selected="home"/>
        <LandingComp/>
    </div>
}