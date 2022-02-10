import React, {Component} from 'react';
import PostService from "../../services/postService";
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: []};

    postService = new PostService();

    async componentDidMount(){
        let myPosts = await this.postService.getAllPosts();
        this.setState({posts: myPosts});
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map((value, index) => <Post item={value} key={index}/>)
                }
            </div>
        );
    }
}

export default AllPosts;
