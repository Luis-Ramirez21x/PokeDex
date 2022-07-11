import starters from '../Images/starters.png';
import './LoginRedirect.css'

function LoginRedirect(){


    return(
        <>
        <div className="please-log-in">
            <h3><a href='/login'>Login</a>/<a href="/signUp">Register</a> to view your saved pokemon!</h3>
            <img src={starters}/>
        </div>
        

        </>
    )


}

export default LoginRedirect;