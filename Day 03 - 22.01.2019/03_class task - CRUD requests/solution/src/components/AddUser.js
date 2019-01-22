import React, { Component } from 'react';

import UserCrud from '../sevices/userCrud';

class AddUsers extends Component {
    state = { success: false };


    addUser = async () => {
        let res = await UserCrud.post(this.refs.name.value, this.refs.job.value);
        this.setState({ success: res.createdAt });
        setTimeout(() => this.setState({ success: false }), 5000)
    };

    render = () => {
        return (
            <div>
                <h1>Add user</h1>
                <div>
                    <label>name</label><input ref="name" />
                </div>
                <div>
                    <label>job</label><input ref="job" />
                </div>
                <button onClick={this.addUser}>add user</button>
                {
                    (this.state.success) && <h3>added successfully at {this.state.success}</h3>
                }
            </div>
        );
    }
}

export default AddUsers;