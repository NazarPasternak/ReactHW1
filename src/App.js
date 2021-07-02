// import './App.css';
import './services/API'
import {getPosts, getPost} from "./services/API";
import {useEffect, useState} from "react";
import Posts from "./components/Posts";

function App() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response =>{
            setPosts(response.data)
        })
    }, [])
    function selectPost(id) {
        console.log('select Id review here', id);
    }
  return (
      <div>
          <Posts item={posts}/>
      </div>
  );
}

export default App;






