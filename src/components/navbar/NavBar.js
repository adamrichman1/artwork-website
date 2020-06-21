import React, {Component} from 'react';
import {Layout, Title} from "./style";
import NavBarDropdownElement from "./NavBarDropdownElement";
import NavBarLinkElement from "./NavBarLinkElement";
import NavBarScrollElement from "./NavBarScrollElement";

class NavBar extends Component {
    render() {
        return (
            <Layout>
                <Title>GRAPHIC DESIGNER · ARTIST</Title>
                {this.props.pageLinks.map(({title, id}) => {
                    if (title === "WORK") {
                        return <NavBarDropdownElement title={title} artCategories={this.props.artCategories}/>
                    }
                    else if (title === "CONTACT") {
                        return <NavBarScrollElement title={title}/>
                    }
                    else {
                        return <NavBarLinkElement title={title} id={id}/>;
                    }
                })}
            </Layout>
        )
    }
}

export default NavBar;
