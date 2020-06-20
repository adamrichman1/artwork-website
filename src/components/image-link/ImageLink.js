import React from "react";
import {Image, ImageContainer, ImageOverlay} from "./style";

const ImageLink = ({image, title}) => {
    return(
        <ImageContainer>
            <Image src={image} alt={title}/>
            <ImageOverlay>{title}</ImageOverlay>
        </ImageContainer>
    )
};

export default ImageLink;
