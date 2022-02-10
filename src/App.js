import React, {Component} from 'react';
import AllUsers from "./componenets/all-users/AllUsers";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AllPosts from "./componenets/all-posts/AllPosts";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>users</Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>posts</Link>
                    </div>
                    <div>
                        <Routes>
                            <Route path={'/users'} element = {<AllUsers/>}/>
                            <Route path={'/posts'} element = {<AllPosts/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
