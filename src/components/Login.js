import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useTitle from './useTitle';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { providerLogin, gitProviderLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider();
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const handleGitSignIn = () => {
        gitProviderLogin(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mb-4' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGitSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p>No Account? Create one.<Link to={'/register'}>Register</Link></p>

        </Container>
    );
};

export default Login;