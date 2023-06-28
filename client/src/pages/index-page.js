import { useEffect } from "react"
import Post1 from "./post-1"

export default function IndexPage() {
    useEffect(() => {
        fetch('/post').then(response => {
            response.json(posts => {
                console.log(posts);
            });
        })
    }, [])
    return (
        <>
        <Post1 />
        <Post1 />
        <Post1 />
        </>
    )
}