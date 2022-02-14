import React, {Component} from 'react';
import AllUsers from "./componenets/all-users/AllUsers";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
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
                        <Switch>
                            <Route path={'/users'} render={() => {
                                return <AllUsers/>
                            }}>
                            </Route>
                            <Route path={'/posts'} render={() => {
                                return <AllPosts/>
                            }}/>

                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
