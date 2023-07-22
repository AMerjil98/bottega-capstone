import { Link, useNavigate } from "react-router-dom";
import "../styles/header.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { handleLogin } from "./login";

export default function Header() {
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('https://vidyanews-2dd3196bd5f5.herokuapp.com/profile', {
            credentials: 'include'
        }).then(response => {
          response.json().then(userInfo => {
            setUserInfo(userInfo);
          });
        });
    }, []);

    function logout() {
        fetch('https://vidyanews-2dd3196bd5f5.herokuapp.com/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;
    const role = userInfo?.role;
    const navigate = useNavigate();

    return (
    <main>
        <header className="head">
            <Link 
                to="/" 
                className="logo"
                onClick={() => {navigate("/");}}
            >
                Vidya.news
            </Link>
            <nav>
                {username && (
                    <>
                        <span>Hello, {username}</span>
                        {(role ==="Admin" || role ==="Owner") && (
                            <Link to="/create">Create new post</Link>
                        )}
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login" className="login">Login</Link>
                        <Link to="/register" className="register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    </main>
    )
}