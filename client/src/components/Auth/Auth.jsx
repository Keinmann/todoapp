import './Auth.style.css';
import { useState } from 'react';
const Auth = () => {
    const [isLogIn, setIsLogIn] = useState(true);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    console.log(isLogIn, email, password, confirmPassword);

    const handleSubmit = async (e, endpoint) => {
        if (!isLogIn && password !== confirmPassword) {
            setError("passwords don't match");
            console.log("passwords don't match")
            return;
        }
        console.log(endpoint, email, password);
        const response = await fetch(`http://localhost:8000/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        });
    }

    return (
        <div className="auth-container">
            <div className='auth-container-box'>
                <h1>
                    Sign {isLogIn ? 'in' : 'up'}
                </h1>
                <form>
                    <input
                        onChange={(object) => { setEmail(object.target.value); }}
                        type="email"
                        autoComplete="on"
                        placeholder='email' />
                    <input
                        onChange={async (object) => { await setPassword(object.target.value); }}
                        type="password"
                        autoComplete="off"
                        placeholder='password' />
                    {!isLogIn && <input
                        onChange={async (object) => { await setConfirmPassword(object.target.value); }}
                        type="password"
                        autoComplete="off"
                        placeholder='confirm password' />}
                    <p>{error}</p>
                    <input className="input__submit" type="submit" onClick={async (e) => { handleSubmit(e, isLogIn ? 'signin' : 'signup') }} />
                </form>
            </div>
            <div className='auth-options'>
                <button
                    onClick={() => { setIsLogIn(true) }}
                    style={{
                        backgroundColor: isLogIn ? 'rgb(255, 255, 255)' : 'rgb(245, 245, 245)',
                        boxShadow: isLogIn ? 'none' : 'inset -8px 8px 12px -3px rgb(220, 220, 220)',
                        color: isLogIn ? 'rgb(100, 100, 100)' : 'rgb( 50, 50, 50 )',
                        fontSize: isLogIn ? '14px' : '12px'
                    }}
                >Login</button>
                <button
                    onClick={() => { setIsLogIn(false) }}
                    style={{
                        backgroundColor: !isLogIn ? 'rgb(255, 255, 255)' : 'rgb(245, 245, 245)',
                        boxShadow: !isLogIn ? 'none' : 'inset 8px 8px 12px -3px rgb(220, 220, 220)',
                        color: !isLogIn ? 'rgb(100, 100, 100)' : 'rgb( 50, 50, 50 )',
                        fontSize: !isLogIn ? '14px' : '12px'
                    }}
                >Sign up</button>
            </div>

        </div>
    );
}

export default Auth;