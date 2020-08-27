import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {

    render(){
        return(
            <nav className='navbar navbar-expand-md navbar-light '>
                 <div className='container'>
                      <Link className='navbar-brand' to='/Signup'>ClickHere</Link>
                </div>
            </nav>
        )
    }

}

export default Home;