// import './selectPost'

export default function Post ({item, selectPost}) {

    // let  {item, selectPost} = props;

    return(
        <div>
            {item.userId} - {item.title} -
            <button onClick={()=> {
                selectPost(item.id)
            }}>Click on</button>
        </div>
    )
}

//
