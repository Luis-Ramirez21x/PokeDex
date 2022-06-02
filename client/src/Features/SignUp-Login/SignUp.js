import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function SignUp() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' , username:'' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        
      };


      const  handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            let test = await axios.post('https://localhost:7208/api/Account/register',
            {
                
                "email": userFormData.email,
                "username": userFormData.username,
                "password": userFormData.password
        
            })
            console.log(test);
        } catch(error){
            console.log(error)
        }

      }
    
    return(
        <>
        <h2>login</h2>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" >
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
            <Form.Group className="mb-3" >
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

            <Form.Group className="mb-3" >
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button 
            variant="success" 
            type="submit"
            disabled={!(userFormData.email && userFormData.password)}
            >
                Submit
            </Button>
        </Form></>
    )
}

export default SignUp;