import { LandingComp } from "../components/LandingComp"
import { Navbar } from "../components/Navbar"



export const Landing = () => {
    return <div>
        <Navbar selected="home"/>
        <LandingComp/>
    </div>
}