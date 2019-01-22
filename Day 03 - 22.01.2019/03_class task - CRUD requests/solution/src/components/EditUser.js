import React, { Component } from 'react';

import UserCrud from '../sevices/userCrud';

class EditUsers extends Component {
    state = { success: false };


    updateUser = async () => {
        let res = await UserCrud.put(this.refs.id.value, this.refs.name.value, this.refs.job.value);
        this.setState({ success: res.updatedAt });
        setTimeout(() => this.setState({ success: false }), 5000)
    };

    render = () => {
        return (
            <div>
                <h1>Edit user</h1>
                <div>
                    <label>id</label><input ref="id" />
                </div>
                <div>
                    <label>name</label><input ref="name" />
                </div>
                <div>
                    <label>job</label><input ref="job" />
                </div>
                <button onClick={this.updateUser}>update user</button>
                {
                    (this.state.success) && <h3>update successfully at {this.state.success}</h3>
                }
            </div>
        );
    }
}

export default EditUsers;