import '../styles/login-reg.scss';
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    
    if (password !== confirmPassword) {
      // Passwords don't match
      console.error("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        const data = await response.json();
        // Registration successful, handle the data if needed
        console.log(data);
      } else {
        // Registration failed, handle the error
        const error = await response.json();
        console.error(error);
      }
    } catch (error) {
      // Network or server error occurred
      console.error(error);
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>REGISTER</h1>
      <input
        type="text"
        placeholder="username"
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        pattern=".{4,}"
        required
        onChange={ev => setPassword(ev.target.value)}
      />
      <input
        type="password"
        placeholder="re-type password"
        pattern=".{4,}"
        required
        onChange={ev => setConfirmPassword(ev.target.value)}
      />
      <button className="reg-btn">Register</button>
    </form>
  );
}