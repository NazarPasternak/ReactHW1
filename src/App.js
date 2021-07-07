import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


export default function App () {
    return (

        <Router>
            <div>
                <div><Link to="/users">users page</Link></div>
                <div><Link to="/posts">posts page</Link></div>
                <div><Link to="/comments">comments post</Link></div>

                <Route path={'/users'} render={() => {
                    return <Users/>
                }}/>

                <Route path={'/posts'} render={() =>{
                    return <Posts/>
                }}/>

                <Route path={'/comments'} render={() =>{
                    return <Comments/>
                }}/>

               {/* <Route path={'/posts'} component={Posts}/>*/}
               {/*<Route path={'/comments'}>*/}
               {/*    <Comments/>*/}

            </div>
        </Router>

    )
}