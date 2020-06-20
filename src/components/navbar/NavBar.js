import React, {Component} from 'react';
import {DropDown, Layout, NavLink, Title} from "./style";
import {Link} from "react-router-dom";

class NavBar extends Component {
    state = {
        toggled: false
    };

    toggleDropdownTrue = () => {
        this.setState(() => ({
            toggled: true
        }))
    };

    toggleDropdownFalse = () => {
        this.setState(() => ({
            toggled: false
        }))
    };

    render() {
        return (
            <Layout>
                <Title>GRAPHIC DESIGNER · ARTIST</Title>
                <NavLink>CONTACT
                    <Link to={'/'}/>
                </NavLink>
                <NavLink>ABOUT
                    <Link to={'/'}/>
                </NavLink>
                <NavLink onMouseEnter={this.toggleDropdownTrue} onMouseLeave={this.toggleDropdownFalse}>WORK
                </NavLink>
                <DropDownMenu toggled={this.state.toggled}/>
                <NavLink>HOME
                    <Link to={'/'}/>
                </NavLink>
            </Layout>
        )
    }
}

const DropDownMenu = ({toggled}) => {
    if (toggled) {
        return (
            <DropDown>
                <Link to={"/"}>Digital</Link>
                <Link to={"/"}>Hand Drawn</Link>
                <Link to={"/"}>Design</Link>
                <Link to={"/"}>Photomontage</Link>
            </DropDown>
        )
    }
    else {
        return null;
    }
};

export default NavBar;
