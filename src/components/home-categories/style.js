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
    border-bottom: 1px solid #303030;
    background-color: #dfdfe5;
    padding-left: 2rem;
    padding-right: 2rem;
    
    @media (max-width: 425px) {
        padding-right: 0rem;
        padding-left: 0rem;
    }
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
        line-height: 20rem;
        &:hover {
            font-size: 40px;
            color: white;
        }
    }
`;

export const Image = styled.img`
    height: 41rem;
    width: 41rem;
    border-radius: 20px;
    
    @media (max-width: 425px) {
        width: 22rem;
        height: 22rem;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
`;
