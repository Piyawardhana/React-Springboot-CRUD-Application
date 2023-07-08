import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href='#' className='navbar-brand' style={{ paddingLeft: 10 }}>Employee Management App</a></div>
                    </nav>
                </header> 
            </div>
        );
    }
}

export default HeaderComponent;