import React from "react";
import {ContentHeaderWrapper, ContentHeaderDescription, ContentHeaderCTA} from "./style";
import {animateScroll} from 'react-scroll'

const ContentHeader = ({contentHeader}) => {
    return (
        <ContentHeaderWrapper onClick={() => scrollDown(800)}>
            <ContentHeaderDescription>{contentHeader.title}</ContentHeaderDescription>
            <ContentHeaderCTA>{contentHeader.description}</ContentHeaderCTA>
        </ContentHeaderWrapper>
    )
};

const scrollDown = (value) => {animateScroll.scrollTo(value)};

export default ContentHeader;
