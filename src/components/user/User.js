

export default function User({singleUser, fromApp}){
    // console.log(singleUser);
    return (
        <div>

            {singleUser.id}) {singleUser.name} - {singleUser.surname}
            <button onClick={() => {fromApp(singleUser.id);
            }}>Click On</button>

        </div>
    );
}


// <div>
//     {users.map(value => <div>{value.id} - {value.name} - {value.username}</div>)}
// </div>