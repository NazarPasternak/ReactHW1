// import {useState, useEffect} from "react";
// import {getComments, getPosts, getUsers} from "../API/API";
//
//
// export default function Posts (){
//
//     let [comments, setComments] = useState([])
//     useEffect(() => {
//         getComments().then(response => {
//             setComments(response.data)
//             // console.log(value)
//         })
//
//     }, [])
//
//     return (
//         <div>
//             {comments.map(value => <div>{value.id} - {value.name} - <br/> {value.body}</div>)}
//         </div>
//     );
// }