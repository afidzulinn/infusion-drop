import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/firebaseConfig';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/login");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    };

    return (
        <main>
            <section style={{
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
            }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 0 1rem rgba(255, 255, 255, 0.1)'
            }}>
                <div>
                <h1 style={{
                    color: '#000',
                    textAlign: 'center',
                    marginBottom: '2rem'
                }}>
                    SignUp
                </h1>
                <form onSubmit={onSubmit}>
                    <div style={{
                    marginBottom: '1rem'
                    }}>
                    <label htmlFor="email-address" style={{
                        color: '#000',
                        display: 'block',
                        marginBottom: '0.5rem'
                    }}>
                        Email address
                    </label>
                    <input
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email address"
                        style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '0.25rem',
                        border: '1px solid #ccc'
                        }}
                    />
                    </div>

                    <div style={{
                    marginBottom: '1rem'
                    }}>
                    <label htmlFor="password" style={{
                        color: '#000',
                        display: 'block',
                        marginBottom: '0.5rem'
                    }}>
                        Password
                    </label>
                    <input
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: '0.25rem',
                        border: '1px solid #ccc'
                        }}
                    />
                    </div>

                    <div style={{
                    textAlign: 'center'
                    }}>
                    <button type="submit" style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        Sign up
                    </button>
                    </div>
                </form>

                <p style={{
                    color: '#000',
                    textAlign: 'center',
                    marginTop: '1rem'
                }}>
                    Already have an account?{' '}
                    <NavLink to="/login" style={{
                    color: '#000',
                    textDecoration: 'underline'
                    }}>
                    Sign in
                    </NavLink>
                </p>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Signup