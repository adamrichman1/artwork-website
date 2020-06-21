import React, {Component} from "react";
import {Column, GridWrapper, Image, ImageContainer, ImageOverlay} from "./styles";

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

const ImageLink = ({image, title}) => {
    return (
        <ImageContainer>
            <Image src={image} alt={title}/>
            <ImageOverlay/>
        </ImageContainer>
    )
};

export default ArtCategory;
