// import './App.css';
import './services/API'
import {getPosts, getPost} from "./services/API";
import {useEffect, useState} from "react";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails/postDetails";



function App() {
    let [posts, setPosts] = useState([]);

    let [postDetails, setPostDetails] = useState(null);


    useEffect(() => {
        getPosts().then(response =>{
            setPosts(response.data)
        })
    }, [])


    function selectPost(id) {
        console.log(id);
        getPost(id).then(({data}) =>{
            setPostDetails(data);
        })
    }

  return (
      <div>
          <Posts item={posts} selectPost={selectPost}/>
          <hr/>
          {
              postDetails && <PostDetails item={postDetails}/>
          }

      </div>
  );
}

export default App;






