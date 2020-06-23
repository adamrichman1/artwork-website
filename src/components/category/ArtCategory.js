import React, {Component} from "react";
import {Column, GridWrapper, Image, ImageContainer, ImageOverlay} from "./styles";
import Modal from "../modal/modal";

class ArtCategory extends Component {
    render() {
        return (
            <GridWrapper>
            {this.props.images.map((column) => {
                return (
                    <Column>
                    {column.map(({image, title}) => {
                        return (
                            <ImageLink image={image} title={title}/>
                        )
                    })}
                    </Column>
                )
            })}
            </GridWrapper>
        )
    }
}

class ImageLink extends Component {
    state = {
        toggled: false
    };

    toggleDropdownTrue = () => {
        this.setState({
            toggled: true
        })
    };

    toggleDropdownFalse = () => {
        console.log("BEFORE");
        console.log(this.state);
        this.setState({
            toggled: false
        });
        console.log("AFTER");
        console.log(this.state);
    };

    render() {
        return (
            <ImageContainer>
                <Image src={this.props.image} alt={this.props.title}/>
                <ImageOverlay/>
            </ImageContainer>
        )
    }
}

export default ArtCategory;
