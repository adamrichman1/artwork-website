import React from "react";
import {HeaderImage} from "./style";

const PageHeader = ({image}) => {
    return (
        <HeaderImage src={image} alt={"Tyler Torre"}/>
    )
};

export default PageHeader;
