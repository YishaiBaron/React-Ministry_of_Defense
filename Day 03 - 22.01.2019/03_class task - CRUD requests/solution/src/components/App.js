import React, { Component } from 'react';
import ViewUsers from './ViewUsers';
import DeleteUsers from './DeleteUser';
import EditUsers from './EditUser';
import AddUsers from './AddUser';

class App extends Component {
    render() {
        return (
            <div>

                <ViewUsers />
                <hr />
                <DeleteUsers />
                <hr />
                <EditUsers />
                <hr/>
                <AddUsers/>
            </div>
        );
    }
}

export default App;
