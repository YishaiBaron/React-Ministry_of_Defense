import React, { Component } from 'react';
import UserCrud from '../sevices/userCrud';

class DeleteUsers extends Component {
    state = { success: false };


    deleteUsers = async () => {
        let res = await UserCrud.delete(this.refs.del.value);
        this.setState({ success: res });
        setTimeout(()=>this.setState({ success: false }),5000)
    };

    render=()=>{
    return (
    <div>
        <h1>Delete user</h1>
        <input ref="del"/>
        <button onClick={this.deleteUsers}>delete user</button>
        {
            (this.state.success) && <h3>delete competed successfully</h3> 
        }
    </div>
    );
  }
}

export default DeleteUsers;
