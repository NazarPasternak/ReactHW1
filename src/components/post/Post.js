
export default function Post (props) {
// export default function Post (item) { other variant with destructurization
    let {item} = props
    return(
        <div>
            {item.userId} - {item.body} -
            <button onClick={()=> {
                selectPost(item.id)
            }}>Click on</button>
        </div>
    )
}