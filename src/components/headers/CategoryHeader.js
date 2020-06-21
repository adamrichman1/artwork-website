import React from "react";
import {HeaderImage, CategoryHeaderContent, SlidingHeader, CategoryHeaderWrapper} from "./style";

const CategoryHeader = ({title, image}) => {
    return (
        <CategoryHeaderWrapper>
            <CategoryHeaderContent>{title}</CategoryHeaderContent>
            <SlidingHeader>
                <HeaderImage src={image} alt={title}/>
            </SlidingHeader>
        </CategoryHeaderWrapper>
    )
};

export default CategoryHeader;
