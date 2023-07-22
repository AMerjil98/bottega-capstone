import { useEffect, useState } from "react";
import Post1 from "./post-1";

export default function IndexPage() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('https://vidyanews-2dd3196bd5f5.herokuapp.com/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, [])
    return (
        <>
        {posts.length > 0 && posts.map(post => (
            <Post1 {...post} />
        ))}
        </>
    )
}