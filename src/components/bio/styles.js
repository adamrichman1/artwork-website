import styled from '@emotion/styled'

export const PictureSection = styled.div`
    flex: 50%;
`;

export const Picture = styled.img`
    height: 75%;
    display: block;
    margin: auto;
    padding-top: 10%;
    @media (max-width: 425px) {
        height: auto;
        width: 75%;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

export const BioSection = styled.div`
    flex: 50%;
    @media (max-width: 425px) {
        padding-bottom: 2rem;
        border-bottom: 1px solid #303030;
    }
`;

export const BioWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #303030;    
    @media (max-width: 425px) {
        display: inline;
    }
`;

export const BioTitle = styled.div`
    padding-top: 19%;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 40px;
    
    @media (max-width: 425px) {
        padding-top: 5%;
        padding-left: 0%;
    }
`;

export const BioIntro = styled.div`
    padding-top: 7.5%;
    padding-left: 20%;
    color: black;
    font-weight: bold;
    font-size: 22px;
    @media (max-width: 425px) {
        padding-top: 5%;
        padding-left: 15%;
    }
`;

export const BioDescription = styled.div`
    padding-top: 4%;
    padding-left: 20%;
    color: black;
    font-size: 15px;
    max-width: 70%;
    @media (max-width: 425px) {
        padding-top: 5%;
        padding-left: 15%;
    }
`;
