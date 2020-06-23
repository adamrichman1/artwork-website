import React, {Component} from 'react';
import {DropDown, DropDownOption, DropDownWrapper, NavLink} from "./style";
import {Link} from "react-router-dom";
import './style.css'

class NavBarDropdownElement extends Component {
    state = {
        toggled: false
    };

    toggleDropdown = () => {
        this.setState((prevState) => ({
            toggled: !prevState.toggled
        }))
    };

    toggleDropdownFalse = () => {
        this.setState(() => ({
            toggled: false
        }))
    };

    render() {
        return (
            <NavLink onClick={this.toggleDropdown} onMouseLeave={this.toggleDropdownFalse}>{this.props.title}
                <DropDownMenu toggled={this.state.toggled} artCategories={this.props.artCategories}/>
            </NavLink>
        )
    }
}

const DropDownMenu = ({toggled, artCategories}) => {
    console.log(artCategories);
    if (toggled) {
        return (
            <DropDownWrapper>
                <DropDown>
                    {artCategories.map(({title, id}) => {
                        return (
                            <Link to={`/category/${id}`} className={"link"}>
                                <DropDownOption>{title}</DropDownOption>
                            </Link>
                        )
                    })}
                </DropDown>
            </DropDownWrapper>
        )
    }
    else {
        return null;
    }
};

export default NavBarDropdownElement;
