import React from 'react';
import styled from 'styled-components';

class Navbar extends React.Component {
    render () {
        return(
            <nav className="navbar navbar-expand-md navbar fixed-top">
                <a className="navbar-brand col-sm-5 col-md-2 mr-0 align-items_center">Pokedex</a></nav>
        );
    }
}

export default Navbar;