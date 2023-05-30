import '../styles/login-reg.scss';

export default function Register() {
    return(
        <form className="register">
            <h1>REGISTER</h1>
            <input type="text" placeholder="username"/>
            <input 
                type="password" 
                placeholder="password"
                pattern=".{4,}"
                required
            />
            <input 
                type="password" 
                placeholder="re-type password"
                pattern=".{4,}"
                required
            />
            <button className="reg-btn">Register</button>
        </form>
    )
}