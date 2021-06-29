import {useState, useEffect} from "react";

export default function Posts () {

    let [postList, setPostList] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setPostList(value)
        })
    },[])



    return (
        <div>
            {postList.map(value => <div>{value.id} - {value.title}</div>)}
        </div>
    )
}