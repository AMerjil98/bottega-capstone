import "../styles/post.scss";
import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post1({_id, title,summary,cover,content,createdAt,author}) {

    return (
    <div className="post">
        <div className="post-image">
            <Link to={`/post/${_id}`}>
                <img src={'https://vidyanews-2dd3196bd5f5.herokuapp.com/'+cover.replace('/uploads', '')} alt="" />
            </Link>
        </div>
        <div className="post-text">
            <Link to={`/post/${_id}`}>
                <h2>{title}</h2>
            </Link>
            <p className="info">
                <a className="author">{author.username}</a>
                <time> at {formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className="summary">{summary}</p>
        </div>
    </div>
    )
}