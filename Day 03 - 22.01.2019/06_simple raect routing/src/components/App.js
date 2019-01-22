import React, { Component } from 'react';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {


    render() {
        return (
            <BrowserRouter>
            <div>
    
              {/*HEDER - START*/}
              <nav>
                    <ul>
                      <li><Link to='/home'>Home</Link></li>
                      <li><Link to='/contact'>Contact</Link></li>
                    </ul>
              </nav>
              {/*HEDER - END*/}
    
              <hr />

              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/contact' component={Contact} />

            </div>
          </BrowserRouter>

        );
    }
}

export default App;
