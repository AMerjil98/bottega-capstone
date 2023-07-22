import {useState} from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    const data = await response.json();
    if (response.ok) {
      const token = data.token;
      document.cookie = `token=${token}; path=/; expires=${new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}`;
      alert('Registratioin successful');
    } else {
      alert('Registration failed');
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input 
        type="text"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}/>
      <input 
        type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}/>
      <button>Register</button>
    </form>
  );
}