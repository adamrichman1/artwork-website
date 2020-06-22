import React from "react";
import {AboutHeaderImage, AboutHeaderImageWrapper} from "./style";

const AboutHeader = ({image}) => {
    return (
        <AboutHeaderImageWrapper>
            <AboutHeaderImage src={image} alt={"Tyler Torre"}/>
        </AboutHeaderImageWrapper>
    )
};

export default AboutHeader;
