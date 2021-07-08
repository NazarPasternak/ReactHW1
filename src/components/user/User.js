import {useState} from "react";
import {getUserPosts} from "../API/API";
import UserPosts from "../user-posts/UserPosts";


export default function User({singleUser}){
    const [userPosts, setUserPosts] = useState([])

    const [toggle, setToggle] = useState(false)

    const fromApp = (id) => {
        getUserPosts(id).then(value =>
            setUserPosts([...value.data]))
        setToggle(!toggle);
    }
    return (
        // <div>
        //     {singleUser.id}) {singleUser.name} - {singleUser.surname}
        //     <button onClick={() => fromApp(singleUser.id)}>Click On</button>
        //
        //     {userPosts && toggle && userPosts.map(value =>
        //         <UserPosts key={value.id} item={value}/>)}
        // </div>

        <div>
            {singleUser.id} - {singleUser.name} - {singleUser.surname}
            <button onClick={() => fromApp(singleUser.id)}>CLICK ON</button>

            {userPosts && toggle && userPosts.map(value => <UserPosts key={value.id} item={value}/>)}
        </div>


    );
}

