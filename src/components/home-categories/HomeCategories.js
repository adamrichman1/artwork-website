import React from "react";
import {Link} from "react-router-dom";
import {Grid, GridWrapper} from "./style";
import ImageLink from "../image-link/ImageLink";

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


export default HomeCategories;
