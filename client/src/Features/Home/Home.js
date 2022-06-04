import MyTeams from "./MyTeams/MyTeams";
import Regions from "./Regions/Regions";
import Auth from '../../App/Util/auth'


function HomePage () {


    return(
        <>
        <Regions />
        <MyTeams />
        </>
    )
}

export default HomePage;