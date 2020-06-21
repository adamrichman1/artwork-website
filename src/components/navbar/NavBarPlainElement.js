import React, {Component} from 'react';
import {NavLink} from "./style";
import {Link} from "react-router-dom";

class NavBarElement extends Component {
    render() {
        return (
            <Link to={`/${this.props.id}`}>
                <NavLink>{this.props.title}</NavLink>
            </Link>
        )
    }
}

export default NavBarElement;
