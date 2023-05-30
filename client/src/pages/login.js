import '../styles/login-reg.scss';

export default function Login() {
    return(
        <form className="login">
            <h1>LOGIN</h1>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button className="log-btn">login</button>
        </form>
    )
}