import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Nav extends React.Component {
    render() {
        return (
            <Navbar style={style.nav} fixed="top" >
                <Navbar.Brand>
                    <h1 style={style.title}>
                        Lunar Discovery 
                        <small className="text-muted" style={style.text}>Helping humanity to reach the stars</small>
                    </h1>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

const style = {
    nav:{
        backgroundColor: '#151E3D',
    },
    title:{
        color: 'white',
        fontSize: 30
    },
    text:{
        marginLeft: 30,
        fontSize: 20
    }
}

export default Nav;