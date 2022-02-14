import React, {Component} from 'react';
import UserService from "../../services/userService";

class FullUser extends Component {

    state = {user: null};

    userService = new UserService();

    async componentDidMount(){
        let {userId} = this.props;
        let user = await this.userService.user(userId);
        this.setState({user});

    }

    render() {
        let {user} = this.state;
        return (
            <div>
                {user && <div>{user.id}, {user.name}</div>}
            </div>
        );
    }
}

export default FullUser;
