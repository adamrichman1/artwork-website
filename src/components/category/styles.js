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
    cursor: pointer;
    border-radius: 20px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
`;

export const Image = styled.img`
    height: auto;
    width: 100%;
    border-radius: 20px;
    @media (max-width: 425px) {
        width: 25rem;
        height: 25rem;
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
`;

export const GridWrapper = styled.section`
    display: flex;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-image: url("/backgrounds/double-bubble-dark.png");
    background-color: #003366;
`;
