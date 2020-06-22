import React from "react";
import {HomeHeaderImage} from "./style";

const HomeHeader = ({image}) => {
    return (
        <HomeHeaderImage src={image} alt={"Tyler Torre"}/>
    )
};

export default HomeHeader;
