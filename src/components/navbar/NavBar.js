import React, {Component} from 'react';
import {Layout, Title} from "./style";
import NavBarDropdownElement from "./NavBarDropdownElement";
import NavBarElement from "./NavBarPlainElement";

class NavBar extends Component {
    render() {
        return (
            <Layout>
                <Title>GRAPHIC DESIGNER · ARTIST</Title>
                {this.props.pageLinks.map(({title, id}) => {
                    return (title === "WORK") ?
                        <NavBarDropdownElement title={title} artCategories={this.props.artCategories}/> :
                        <NavBarElement title={title} id={id}/>
                })}
            </Layout>
        )
    }
}

export default NavBar;
