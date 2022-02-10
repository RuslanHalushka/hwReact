import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, selectedUser} = this.props;
        return (
            <div>
                {item.name} --- {item.email}
                <button onClick={()=> selectedUser(item.id)}>CLICK</button>
            </div>
        );
    }
}

export default User;
