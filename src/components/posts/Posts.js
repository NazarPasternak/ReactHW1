import {useState, useEffect} from "react";
import {getPosts} from "../API/API";
import User from "../user/User";
import Post from "../post/Post";


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
            {posts.map(value =><Post key={value.id} singlePost={value}/>)}
        </div>
    );
}


{/*{posts.map(value => <div>{value.id} - {value.title} - <br/> {value.body}</div>)}*/}



