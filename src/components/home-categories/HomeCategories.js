import React from "react";
import {Link} from "react-router-dom";
import {Grid, GridWrapper, Image, ImageContainer, ImageOverlay} from "./style";

const HomeCategories = ({ artCategories }) => {
    return (
        <GridWrapper>
            <Grid>{
                artCategories.map(({image, title, id}) => {
                    return (
                        <Link to={`/category/${id}`}>
                            <ImageLink image={image} title={title}/>
                        </Link>
                    );
                })
            }</Grid>
        </GridWrapper>
    );
};

const ImageLink = ({image, title}) => {
    return(
        <ImageContainer>
            <Image src={image} alt={title}/>
            <ImageOverlay>{title}</ImageOverlay>
        </ImageContainer>
    )
};

export default HomeCategories;
