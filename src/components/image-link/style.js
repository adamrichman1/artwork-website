import styled from "@emotion/styled/macro";

export const ImageOverlay = styled.p`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    visibility: hidden;
    opacity: 0;

    /* transition effect. not necessary */
    transition: opacity .2s, visibility .2s;
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 200px;
    width: 257px;
    &:hover ${ImageOverlay} {
        visibility: visible;
        opacity: 1;
    }
`;

export const Image = styled.img`
    width: 100%;
    border: 1px solid white;
`;
