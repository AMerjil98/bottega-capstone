import { useEffect, useState } from "react";
import Post1 from "./post-1";

export default function IndexPage() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
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