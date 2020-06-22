import React from "react";
import {HomeHeaderImage, CategoryHeaderContent, SlidingHeader, CategoryHeaderWrapper} from "./style";

const CategoryHeader = ({title, image}) => {
    return (
        <CategoryHeaderWrapper>
            <CategoryHeaderContent>{title}</CategoryHeaderContent>
            <SlidingHeader>
                <HomeHeaderImage src={image} alt={title}/>
            </SlidingHeader>
        </CategoryHeaderWrapper>
    )
};

export default CategoryHeader;
