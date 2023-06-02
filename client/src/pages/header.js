import { Link } from "react-router-dom";
import "../styles/header.scss";

export default function Header() {
    return (
    <main>
        <header className="head">
            <Link href="/" className="logo">My Blog</Link>
            <nav>
                <Link to="/login" className="login">Login</Link>
                <Link to="/register" className="register">Register</Link>
            </nav>
        </header>
    </main>
    )
}