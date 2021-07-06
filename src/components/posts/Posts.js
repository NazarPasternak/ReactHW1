import {useState, useEffect} from "react";
import {getPosts} from "../API/API";


export default function Posts (){

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
            // console.log(value)
        })

    }, [])

    return (
        <div>
            {posts.map(value => <div>{value.id} - {value.title} - <br/> {value.body}</div>)}
        </div>
    );
}