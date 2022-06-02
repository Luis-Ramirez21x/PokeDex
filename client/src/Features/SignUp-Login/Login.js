import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Login(){
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };

      const  handleFormSubmit = async (event) => {
        event.preventDefault();

        try{

            console.log(userFormData.username, userFormData.password)
            let data = await axios.post('https://localhost:7208/api/Account/login',
            {
                "username": userFormData.username,
                "password": userFormData.password
            })

                console.log(data);
            
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
                placeholder="Enter username"
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
                />
                <Form.Text className="text-muted">
                    Nothing yet...
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
            disabled={!(userFormData.username && userFormData.password)}
            >
                Submit
            </Button>
        </Form></>
    )
}

export default Login;