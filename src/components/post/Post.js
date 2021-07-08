export default function Post ({singlePost, fromApp}){
    return (
        <div>
            {singlePost.id} - {singlePost.title} - {fromApp}

        </div>
    )
}