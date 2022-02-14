import React, {Component} from 'react';
import PostService from "../../services/postService";

class FullPost extends Component {

    state = {post: null};

    postService = new PostService();

    async componentDidMount() {
        let {postId} = this.props;
        let post = await this.postService.getPost(postId);
        this.setState({post});
    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {
                    post && <div> {post.title}</div>
                }
            </div>
        );
    }
}

export default FullPost;
