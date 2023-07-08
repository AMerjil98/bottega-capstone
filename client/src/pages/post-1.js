import "../styles/post.scss";
import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post1({title,summary,cover,content,createdAt,author}) {

    return (
    <div className="post">
        <div className="post-image">
            <img src={'http://localhost:4000'+cover} alt="" />
        </div>
        <div className="post-text">
            <h2>{title}</h2>
            <p className="info">
                <a className="author">{author.username}</a>
                <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className="summary">{summary}</p>
        </div>
    </div>
    )
}