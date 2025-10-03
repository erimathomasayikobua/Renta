import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login () {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Username:', username);
        console.log('Password:', password);

        localStorage.setItem("auth", "true");
        localStorage.setItem("username", username);

        Navigate("[/authentication");
    };
    return (
        <div className="Login-container">
            <div className="Login-form">
                <h2>Welcome to Renta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="Username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                    </div>
                    <button type="submit">
                    Login
                    </button>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Signup</a>
                </p>
                <form className='login-options'>
                    <p>Login with</p><br></br>
                    <a href='https://accounts.google.com/signin' target="_blank">
                    <i class="fab fa-google"></i> Google</a><br></br>
                    <a href='https://www.facebook.com/login/' target="_blank">
                    <i class="fab fa-facebook"></i> facebook</a><br></br>
                    <a href='https://login.yahoo.com/' target="_blank">
                    <i class="fab fa-yahoo"></i> Yahoo</a><br></br>
                    <a href='https://appleid.apple.com/sign-in' target="_blank">
                    <i class="fab fa-apple"></i> Apple</a><br></br>
                </form>
            </div>
        </div>
    )
}
export default Login