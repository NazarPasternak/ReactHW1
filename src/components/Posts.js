import Post from "./post/Post";

export default function Posts (props){
// export default function Posts ({item}){ destructurization variant

    let {item} = props;
    console.log(item)

    return (
        <div>
            {
                item.map(value => <Post key={value.id} item={value} selectPost={selectPost}/>)
            }
        </div>
    )
}