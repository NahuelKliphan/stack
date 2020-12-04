import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;