import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function Login(){
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };

      const  handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            
        } catch(error){
            console.log(error)
        }

      }

    return(
        <>
        <h2>login</h2>
        <Form>
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

export default Login;