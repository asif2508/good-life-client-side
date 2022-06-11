import React, { useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Loading/Loading';
import './Register.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [message, setMessage] = useState('');
    const [checkValue, setCheckValue] = useState(false);
    const [token] = useToken(user || user1);
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/habits');
    }

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(password.length);
        const confirmPassword = event.target.confirmPassword.value;
        if (password.length >= 6) {
            if (password === confirmPassword) {
                if (!user) {
                    await createUserWithEmailAndPassword(email, password);
                    await updateProfile({ displayName: name });
                }
            } else {
                setMessage("Password and Confirm password didn't match!");
            }

        } else {
            setMessage("Password length can't be less than 6!")
        }
        if (user) {
            navigate('/habits');
        }
    }
    const handlesignInWithGoogle = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <Container fluid className='register-page'>
                <div className='register-style mx-auto p-4'>
                    <h3>Create a New Account</h3>
                    <form onSubmit={handleCreateUser}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3">
                            <Form.Control type="name" name='name' placeholder="Your Name" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" name='email' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                            <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                        </FloatingLabel>
                        {error && <p className='text-danger mb-0 mt-2 text-start'><small>{error.message}</small></p>}
                        {message && <p className='text-danger mb-0 mt-2 text-start'><small>{message}</small></p>}

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setCheckValue(!checkValue)} className='text-start m-2 mb-0' type="checkbox" label="Accept terms and conditions" name='terms' id='terms' />
                        </Form.Group>

                        <button className={!checkValue ? 'w-100 mt-0 login-disabled' : 'w-100 mt-0 login-btn'} type="submit" disabled={!checkValue}>Register</button>
                    </form>
                    <p className='text-start m-2'>Already have an account?<Link className='text-primary ms-1 fw-bold' to='/login'>Login</Link> </p>
                    <div className='d-flex mt-3 align-items-center justify-content-center mb-3'>
                        <div className='line-style'></div><div className='ms-1 me-1 fw-bold'>OR</div><div className='line-style'></div>
                    </div>
                    <button onClick={handlesignInWithGoogle} className='w-100 login-btn'>sign in with Google</button>
                </div>
            </Container>
        </div>
    );
};

export default Register;