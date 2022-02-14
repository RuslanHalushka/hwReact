import React, {Component} from 'react';
import PostService from "../../services/postService";
import Post from "../post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../full-post/FullPost";

class AllPosts extends Component {

    state = {posts: []};

    postService = new PostService();

    async componentDidMount(){
        let myPosts = await this.postService.getAllPosts();
        this.setState({posts: myPosts});
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map((value, index) => <Post item={value} key={index}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) =>{
                        let {match: {params: {id}}} = props;
                        return <FullPost postId ={id} key = {id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);
