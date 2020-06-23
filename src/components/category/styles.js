import styled from '@emotion/styled'

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: .4s ease;
    background-color: rgba(0, 0, 0, 0);
    color: transparent;
    border-radius: 20px;
`;

export const Image = styled.img`
    height: auto;
    width: 100%;
    border-radius: 20px;
    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    margin-bottom: 1rem;
`;

export const Column = styled.div`
    flex: 33%;
    max-width: 33%;
    padding: 1rem;
    
    @media (max-width: 425px) {
        padding: 0;
        max-width: 100%;
    }
`;

export const GridWrapper = styled.section`
    display: flex;
    border-bottom: 1px solid #303030;
    padding-left: 1rem;
    padding-right: 1rem;   
    @media (max-width: 425px) {
        padding-top: 1rem;
        display: inline-block;
    }
`;
