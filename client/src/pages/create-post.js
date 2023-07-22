import 'react-quill/dist/quill.snow.css';
import '../styles/create-new.scss';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../editor";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('https://vidyanews-2dd3196bd5f5.herokuapp.com/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form onSubmit={createNewPost}>
            <input 
                type="title" 
                placeholder={'Title'} 
                value={title} 
                onChange={ev => setTitle(ev.target.value)} 
            />
            <input 
                type="summary" 
                placeholder={'Summary'} 
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
            />
            <input 
                type="file" 
                onChange={ev => setFiles(ev.target.files)}
            />
            <Editor value={content} onChange={setContent} />
            <button id='create-btn'>CREATE POST</button>
        </form>
    )
}