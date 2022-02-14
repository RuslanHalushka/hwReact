import React, {Component} from 'react';
import UserService from "../../services/userService";
import User from "../user/User";
import {Route, Switch, withRouter} from "react-router-dom";
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {

    state = {users: []};

    userService = new UserService();

    async componentDidMount() {
        let myUsers = await this.userService.getUsers();
        this.setState({users: myUsers});
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {users.map((user, index) => <User item = {user} key = {index}/>)}

                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let {match: {params: {id}}} = props;
                        return <FullUser userId = {id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>

        );
    }
}

export default withRouter(AllUsers);
