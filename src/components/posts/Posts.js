import {useState, useEffect} from "react";
import {getPosts} from "../API/API";
import User from "../user/User";


export default function Posts (){

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
            // console.log(value)
        })

    }, [])

    const fromApp = (id) => {
        console.log(id)
    }

    return (
        <div>
            {posts.map(value => <User singlePost={value} fromApp={fromApp}/>)}
        </div>
    );
}


{/*{posts.map(value => <div>{value.id} - {value.title} - <br/> {value.body}</div>)}*/}



