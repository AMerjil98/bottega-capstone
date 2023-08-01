import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";

import "../styles/create-new.scss";
import Editor from "../editor";

export default function EditPost() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    const response = await fetch(`http://localhost:4000/post/${id}`, {
      method: 'PUT',
      body: data,
    });
    if (response.ok) {
      setRedirect(true);
    }
  };

  const deletePost = async () => {
    try{
      const response = await fetch(`http://localhost:4000/post/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setRedirect(true);
      } else {
        console.error("Failed to delete post", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  if (redirect) {
    return <Navigate to={'/post/'+id} />
  }

  return (
    <div className="edtpost-pg">
      <form onSubmit={updatePost}>
        <input type="text"
          placeholder={'Title'}
          value={title}
          onChange={ev => setTitle(ev.target.value)} />
        <input type="text"
          placeholder={'Summary'}
          value={summary}
          onChange={ev => setSummary(ev.target.value)} />
        <Editor onChange={setContent} value={content} />
        <button style={{marginTop:'5px'}}>Update post</button>
      </form>
      <div className="btn-box">
        <button className="del-btn" onClick={deletePost}>
          DELETE POST
        </button>
      </div>
    </div>
  );
}