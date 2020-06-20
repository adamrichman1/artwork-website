import React from "react";
import {PageHeaderWrapper} from "./style";

const PageHeader = ({image}) => {
    return (
        <PageHeaderWrapper src={image} alt={"Tyler Torre"}/>
    )
};

export default PageHeader;
