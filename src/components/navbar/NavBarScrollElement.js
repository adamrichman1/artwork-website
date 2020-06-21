import React, {Component} from 'react';
import {NavLink} from "./style";
import {animateScroll} from 'react-scroll'

class NavBarElement extends Component {
    render() {
        return (
            <NavLink onClick={scrollToBottom}>{this.props.title}</NavLink>
        )
    }
}

const scrollToBottom = () => {animateScroll.scrollToBottom()};

export default NavBarElement;
