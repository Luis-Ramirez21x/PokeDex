import { Form, Button, Container, Row, Alert} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import squirrel from '../../Images/squirrel.png'
import './Login.css'

function SignUp() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' , username:'' });
    const [showAlert, setShowAlert] = useState(false);
    let navigate = useNavigate();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        
      };


      const  handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            let signUp = await axios.post(process.env.REACT_APP_API_URL + 'Account/register',
            {
                
                "email": userFormData.email,
                "username": userFormData.username,
                "password": userFormData.password
        
            })
            console.log(signUp.status);
            if(signUp.status === 201){
                navigate("/");
            }
        } catch(error){
            console.log(error);
            setShowAlert(true);
        }

      }
    
    return(
        <>
        <Container>
            <Row>
                <h2 className="tittles">Sign-Up</h2>
                <Form onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your signup!
                </Alert>
                    <Form.Group className="mb-3 text-format" >
                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control 
                        type="username" 
                        placeholder="Enter Username"
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                        />
                        <Form.Text className="text-muted">
                            What would you like to be called?
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 text-format"  >
                        <Form.Label htmlFor='email'>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
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
                    variant="dark" 
                    type="submit"
                    
                    disabled={!(userFormData.email && userFormData.password)}
                    >
                        Submit
                    </Button>
                </Form>
                
                <img src={squirrel} className="squirrel"/>
                
            </Row>
        </Container>
    
        </>
    )
}

export default SignUp;