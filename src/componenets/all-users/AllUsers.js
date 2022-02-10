import React, {Component} from 'react';
import UserService from "../../services/userService";
import User from "../user/User";

class AllUsers extends Component {

    state = {users: []};

    userService = new UserService();

    async componentDidMount() {
        let myUsers = await this.userService.getUsers();
        this.setState({users: myUsers});
    }

    render() {
        let {users} = this.state
        return (
            <div>
                {users.map((user, index) => <User item = {user} key = {index}/>)}
            </div>
        );
    }
}

export default AllUsers;
