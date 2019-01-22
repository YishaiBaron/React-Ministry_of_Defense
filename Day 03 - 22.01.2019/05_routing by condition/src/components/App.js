import React, { Component } from 'react';
import Home from './Home';
import Contact from './Contact';

class App extends Component {


    state = { page: "Home" };

    setPage = (newPage) => {
        this.setState({ page: newPage })
    }

    render() {
        return (
            <div >

                <button onClick={()=>this.setPage("Home")}>Home</button>
                <button onClick={()=>this.setPage("Contact")}>Contact</button>
                <hr />

                {
                    (this.state.page == "Home") ? <Home /> : <Contact />
                }

            </div>
        );
    }
}

export default App;
