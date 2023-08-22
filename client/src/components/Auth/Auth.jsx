import './Auth.style.css';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
const Auth = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null);
    const [isLogIn, setIsLogIn] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    const setMode = (status) => {
        setIsLogIn(status);
        setError(null);
    }

    const handleSubmit = async (event, endpoint) => {
        event.preventDefault();
        if (!isLogIn && password !== confirmPassword) {
            setError("passwords don't match");
            return;
        }
        if (isLogIn && password.length < 3) {
            return;
        }
        const response = await fetch(`http://localhost:8000/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'endpoint': endpoint,
                'email': email,
                'password': password
            })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (data.detail) {
            setError(data.detail);
        } else {
            setCookie('Email', data.email, { 'maxAge': 600 });
            setCookie('AuthToken', data.token, { 'maxAge': 600 });
            window.location.reload();
        }
    }

    return (
        <div className="auth-container">
            <div className='auth-container-box'>
                <h1>
                    {isLogIn ? 'Login' : 'Register'}
                </h1>
                <form>
                    <input
                        onChange={(object) => { setEmail(object.target.value); }}
                        type="email"
                        autoComplete="on"
                        placeholder='email' />
                    <input
                        className='auth-input'
                        onChange={async (object) => { setPassword(object.target.value); }}
                        type="password"
                        autoComplete="off"
                        placeholder='password' />
                    {!isLogIn && <input
                        onChange={async (object) => { setConfirmPassword(object.target.value); }}
                        type="password"
                        autoComplete="off"
                        placeholder='confirm password' />}

                    <input className="input__submit" type="submit" onClick={async (e) => { handleSubmit(e, isLogIn ? 'signin' : 'signup') }} />
                </form>
            </div>
            <p>{error}</p>
            <div className='auth-options'>
                <button
                    className='auth-button'
                    onClick={() => { setMode(true) }}
                    style={{
                        backgroundColor: isLogIn ? 'rgb(255, 255, 255)' : 'rgba(10, 10, 10, 0.01)',
                        boxShadow: isLogIn ? 'none' : 'inset -8px 8px 12px -3px rgb(220, 220, 220)',
                        color: isLogIn ? 'rgb(100, 100, 100)' : 'rgb( 50, 50, 50 )',
                        fontSize: isLogIn ? '14px' : '13px'
                    }}
                >Login</button>
                <button
                    className='auth-button'
                    onClick={() => { setMode(false) }}
                    style={{
                        backgroundColor: !isLogIn ? 'rgb(255, 255, 255)' : 'rgba(10, 10, 10, 0.01)',
                        boxShadow: !isLogIn ? 'none' : 'inset 8px 8px 12px -3px rgb(220, 220, 220)',
                        color: !isLogIn ? 'rgb(100, 100, 100)' : 'rgb( 50, 50, 50 )',
                        fontSize: !isLogIn ? '14px' : '13px'
                    }}
                >Register</button>
            </div>

        </div>
    );
}

export default Auth;