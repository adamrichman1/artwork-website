import React from 'react';
import {BioDescription, BioSection, BioTitle, BioIntro, BioWrapper, Picture, PictureSection} from "./styles";

const Bio = ({bio}) => {
    return (
        <BioWrapper>
            <PictureSection>
                <Picture src={bio.image}/>
            </PictureSection>
            <BioSection>
                <BioTitle>{bio.title}</BioTitle>
                <BioIntro>{bio.intro}</BioIntro>
                {bio.description.map((desc) => {
                    return (
                        <BioDescription>{desc}</BioDescription>
                    )
                })}
            </BioSection>
        </BioWrapper>
    )
};

export default Bio;
