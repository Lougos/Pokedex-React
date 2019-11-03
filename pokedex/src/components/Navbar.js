import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render () {
        return(
            <nav className="navbar navbar-expand-md navbar fixed-top">
                <Link to={"/"}>    
                <a className="navbar-brand col-sm-5 col-md-2 mr-0 align-items_center">Pokedex        
                </a>
                </Link>
                </nav>
        );
    }
}

export default Navbar;