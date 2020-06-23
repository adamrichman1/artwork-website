import React, {Component} from "react";
import {
    FooterWrapper,
    Title,
    Contact,
    Copyright,
    ContactWrapper
} from "./styles";

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <Title>Contact</Title>
                {this.props.contact.map(({name, url}, index) => {
                    return (
                        <ContactWrapper>
                            <Contact href={url}>{name}</Contact>
                            {(index !== this.props.contact.length-1) ? <Contact> | </Contact> : null}
                        </ContactWrapper>
                    )
                })}
                <Copyright>© 2020 by Tyler Torre</Copyright>
            </FooterWrapper>
        )
    }
}

export default Footer;
