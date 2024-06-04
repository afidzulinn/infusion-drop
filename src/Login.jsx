import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../src/firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
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
                  <h1 style={{
                    color: '#000',
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}>
                    Please login to your account
                  </h1>
                  <form>
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
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
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
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
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
                      <button
                        onClick={onLogin}
                        style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.25rem',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </form>

                  <p className="text-sm text-white text-center" style={{
                    color: '#000',
                    textAlign: 'center',
                    marginTop: '1rem'
                  }}>
                    No account yet? {' '}
                    <NavLink to="/signup" style={{
                      color: '#000',
                      textDecoration: 'underline'
                    }}>
                      Sign up
                    </NavLink>
                  </p>
                </div>
              </section>
            </main>
        </>
    )
}
 
export default Login