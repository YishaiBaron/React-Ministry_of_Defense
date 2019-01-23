import React, { Component } from 'react';
import Com1 from './Com1';

class App extends Component {

    state = { msg: "default" };

    setMsg = () => {
        this.setState({ msg: this.refs.test.value });
    }
    render() {
        return (
            <div>

                <input ref="test" />
                <button onClick={this.setMsg}>click me</button>
                {this.state.msg !== "Alice" && <Com1 msg={this.state.msg} />}
            </div>
        );
    }
}

export default App;
