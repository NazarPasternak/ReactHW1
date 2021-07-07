import {useState, useEffect} from "react";
import {getUsers} from "../API/API";
import User from "../user/User";



export default function Users(){

    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
            // console.log(value)
        })

    }, [])

    return (
        <div>
            {users.map(value => <User key={value.id} singleUser={value} fromApp={value}/>)}
        </div>
    );
}




// <div>
//     {users.map(value => <div>{value.id} - {value.name} - {value.username}</div>)}
// </div>