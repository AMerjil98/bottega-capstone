import '../styles/login-reg.scss';
import {useState} from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function login(ev) {
        ev.preventDefualt();
        await fetch('http://localhost:400/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        })
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>LOGIN</h1>
            <input 
                type="text" 
                placeholder="username" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)}
            />
            <input 
                type="text" 
                placeholder="password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}
            />
            <button className="log-btn">login</button>
        </form>
    )
}