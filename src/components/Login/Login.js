import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import './Login.css';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    let location = useLocation();

    let from = location.state?.from?.pathname || "/habits";
    if (loading) {
        return <Loading></Loading>
    }
    if(user || user1){
        navigate(from, { replace: true });
    }
    const handlesignIn = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        if (user) {
            navigate(from, { replace: true });
        }
    }
    const handlesignInWithGoogle = () =>{
        signInWithGoogle();
    }
    return (
        <div>
            <Container fluid className='login-page'>
                <div className='form-style mx-auto p-4'>
                    <h3>Login to Your Account</h3>
                    <form onSubmit={handlesignIn}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" name='email' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name='password' placeholder="Password" />

                        </FloatingLabel>
                        {error && <p className='text-danger mt-1 mb-0'>{error.message}</p>}
                        <button className='w-100 mt-3 login-btn' type="submit">Login</button>
                    </form>
                    <p className='text-start m-2'>Don't have an account?<Link className='text-primary ms-1 fw-bold' to='/register'>Register</Link> </p>
                    <div className='d-flex mt-3 align-items-center justify-content-center mb-3'>
                        <div className='line-style'></div><div className='ms-1 me-1 fw-bold'>OR</div><div className='line-style'></div>
                    </div>
                    <button onClick={handlesignInWithGoogle} className='w-100 login-btn'>sign in with Google</button>
                </div>
            </Container>
            
        </div>
    );
};

export default Login;