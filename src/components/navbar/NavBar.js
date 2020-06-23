import React, {Component} from 'react';
import {Layout, NavLinkContainer, Title} from "./style";
import NavBarDropdownElement from "./NavBarDropdownElement";
import NavBarLinkElement from "./NavBarLinkElement";
import NavBarScrollElement from "./NavBarScrollElement";

class NavBar extends Component {
    render() {
        return (
            <Layout>
                <Title>Graphic Designer · Artist</Title>
                <NavLinkContainer>
                {this.props.pageLinks.map(({title, id}) => {
                    if (title === "Work") {
                        return <NavBarDropdownElement title={title} artCategories={this.props.artCategories}/>
                    }
                    else if (title === "Contact") {
                        return <NavBarScrollElement title={title}/>
                    }
                    else {
                        return <NavBarLinkElement title={title} id={id}/>;
                    }
                })}
                </NavLinkContainer>
            </Layout>
        )
    }
}

export default NavBar;
