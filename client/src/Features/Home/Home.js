import MyTeams from "./MyTeams/MyTeams";
import Regions from "./Regions/Regions";
import Auth from '../../App/Util/auth'


function HomePage () {
    const token = Auth.loggedIn()

    if(token){
        console.log('mf is logged in')
    }

    return(
        <>
        <Regions />
        <MyTeams />
        </>
    )
}

export default HomePage;