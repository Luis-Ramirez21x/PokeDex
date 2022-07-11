import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Auth from '../../App/Util/auth'
import { useNavigate } from "react-router-dom";
import ash from '../../Images/ash.png'
import './Login.css'

function Login(){
    const [showAlert, setShowAlert] = useState(false);
    let loggedIn = Auth.loggedIn();
        
    const navigate = useNavigate();
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });

    
            
    useEffect(() =>{
        if(loggedIn){
            navigate("/pokemonList");
        }
    },[])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };

      const  handleFormSubmit = async (event) => {
        event.preventDefault();

        try{

            
            let {data}= await axios.post('https://localhost:7208/api/Account/login',
            {
                "username": userFormData.username,
                "password": userFormData.password
            })

            Auth.login(data.token);
            
        } catch(error){
            console.log(error);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
          });

        

      }

    return(
        <>
        <Container>
            <Row>
                <h2 className="tittles">Login</h2>
                <Form onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
              Username or Password is incorrect!
            </Alert>
                    <Form.Group className="mb-3 text-format" >
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control 
                        type="username" 
                        placeholder="Enter username"
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                        />
                        <Form.Text className="text-muted">
                            Welcome Back {userFormData.username}!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 text-format" >
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name='password'
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                        />
                    </Form.Group>

                    <Button 
                    className="text-format"
                    variant="dark" 
                    type="submit"
                    disabled={!(userFormData.username && userFormData.password)}
                    >
                        Submit
                    </Button>
                </Form>
                
                <h3 className="text-format" style={{"margin-top" : "2%"}}> Don't have An account? Sign up <a href='/signup'>here!</a></h3>
                <img src={ash} className="ash"/>
            </Row>
        </Container>
        
        </>

       
    )
}

export default Login;