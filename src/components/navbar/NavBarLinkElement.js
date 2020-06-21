import React, {Component} from 'react';
import {NavLink} from "./style";
import {Link} from "react-router-dom";

class NavBarLinkElement extends Component {
    render() {
        console.log(this.props);
        return (
            <Link to={`/${this.props.id}`}>
                <NavLink>{this.props.title}</NavLink>
            </Link>
        )
    }
}

export default NavBarLinkElement;
