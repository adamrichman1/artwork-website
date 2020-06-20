import React from "react";
import {Link} from "react-router-dom";
import {Grid, Wrapper} from "./style";
import ImageLink from "../image-link/ImageLink";

const HomeCategories = ({ artCategories }) => {
    return (
        <Wrapper>
            <Grid>{
                artCategories.map(({image, title}) => {
                    return (
                        <Link to={`/category/${title}`}>
                            <ImageLink image={image} title={title}/>
                        </Link>
                    );
                })
            }</Grid>
        </Wrapper>
    );
};


export default HomeCategories;
