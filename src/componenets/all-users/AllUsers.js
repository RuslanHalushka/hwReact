import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/User";

class AllUsers extends Component {

    state = {users: [], chosenUser: null};

    userService = new UserService();

    componentDidMount() {
        this.userService.getAllUsers()
            .then(value => this.setState({users: value}))
    }

    // selectedUser=(id)=>{
    //     let {users} = this.state;
    //     let find = users.find(value => value.id === id);
    //     this.setState({chosenUser: find});
    // }

    selectedUser=(id)=>{
        this.userService.selectedUser(id)
            .then(value => this.setState({chosenUser: value}))
    }

    render() {
        let {users, chosenUser} = this.state;
        return (
            <div>
                {
                    users.map((user, index) => <User item ={user}
                                                     key = {index} selectedUser ={this.selectedUser}/>)
                }
                {
                    chosenUser && <h2>{chosenUser.name}</h2>
                }
            </div>
        );
    }
}

export default AllUsers;
