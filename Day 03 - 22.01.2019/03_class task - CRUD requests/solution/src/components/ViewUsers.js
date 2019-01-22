import React, { Component } from 'react';
import UserCrud from '../sevices/userCrud';

class ViewUsers extends Component {
    state = { users: [] };


    constructor(props) {
        super(props);
        this.getAllUsers();
    }


    getAllUsers = async () => {
        let res = await UserCrud.get();
        this.setState({ users: res.data });
    };

    render() {
        return (
            <div>
                <h1>All users</h1>

                <table border="1">
                    <tbody>

                        <tr>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>avatar</th>
                        </tr>
                        {
                            this.state.users.map(x => (
                                <tr key={x.id}>
                                    <td>{x.first_name}</td>
                                    <td>{x.last_name}</td>
                                    <td><img src={x.avatar} alt="user" /></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        );
    }
}

export default ViewUsers;
