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
    background-image: url("double-bubble-dark.png");
    background-color: #003366;
`;
