import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const handleFormSubmit = event => {
 event.preventDefault();
 console.log(event.target.email.value)
}

function BootstrapForm() {
    return (
        <div className="w-50 mx-auto">
            <h3 className='text-warning'>Please register</h3>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default BootstrapForm;