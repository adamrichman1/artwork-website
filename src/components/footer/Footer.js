import React, {Component} from "react";
import {
    FooterWrapper,
    FooterTitle,
    FooterContact,
    FooterSocialMedia,
    FooterSocialMediaWrapper,
    FooterCopyright
} from "./styles";

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <FooterTitle>C O N T A CT</FooterTitle>
                {this.props.contact.map(({key, value}) => {
                   return (
                       <FooterContact>{key}: {value}</FooterContact>
                   )
                })}
                <FooterSocialMediaWrapper>
                {this.props.socialMedia.map(({name, url}, index) => {
                    return (
                        (index === this.props.socialMedia.length-1) ?
                            <FooterSocialMedia href={url}>{name}</FooterSocialMedia> :
                            <FooterSocialMedia href={url}>{name} | </FooterSocialMedia>
                    )
                })}
                </FooterSocialMediaWrapper>
                <FooterCopyright>© 2020 by Tyler Torre</FooterCopyright>
            </FooterWrapper>
        )
    }
}

export default Footer;
