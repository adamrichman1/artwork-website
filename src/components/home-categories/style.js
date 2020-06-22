import styled from '@emotion/styled'

export const Grid = styled.div`
    display: grid;
    grid-gap: 3rem;
    justify-items: center;
    align-items: center;
    
    @media only screen and (min-width: 760px) {
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    @media (max-width: 425px) {
        grid-gap: 1rem;
    }
`;

export const GridWrapper = styled.section`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-image: url("/backgrounds/double-bubble-dark.png");
    background-color: #003366;
    padding-left: 2rem;
    padding-right: 2rem;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: .4s ease;
    background-color: rgba(0, 0, 0, 0);
    color: transparent;
    text-align: center;
    font-size: 80px;
    line-height: 41rem;
    border-radius: 20px;
  
    &:hover {
      color: white;
      background-color: rgba(0, 0, 0, 0.6);
    }
    @media (max-width: 425px) {
      line-height: 25rem;
    }
`;

export const Image = styled.img`
    border: 1px solid white;
    height: 41rem;
    width: 41rem;
    border-radius: 20px;
    
    @media (max-width: 425px) {
        width: 25rem;
        height: 25rem;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
`;
