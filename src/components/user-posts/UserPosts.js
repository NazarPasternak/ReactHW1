import React from 'react';

const UserPosts = ({item}) => {
    return (
        <div>
            {item.id}. {item.title}
        </div>
    )
}

export default UserPosts;