import styled from '@emotion/styled'

export const HomeHeaderImage = styled.img`
    display: block;
    width: 100%;
    max-height: 30rem;
    border-bottom: 1px solid white;
    background-color: #003366;
`;

export const AboutHeaderImage = styled.img`
    position: absolute;
    bottom: -4rem;
    right: 3%;
    width: 100%;
`;

export const AboutHeaderImageWrapper = styled.div`
    position: relative;
    background-color: #003366;
    width: 100%;
    height: 20rem;
`;

export const CategoryHeaderContent = styled.div`
    position: absolute;
    top: 45%;
    left: 45%;
    color: white;
    font-weight: bold;
    font-size: 46px;
    z-index: 2;
`;

export const CategoryHeaderWrapper = styled.div`
    position: relative;
    overflow-x: hidden;
`;

export const SlidingHeader = styled.div`
    background: repeat-x;
    height: 100%;
    width: 5076px;
    animation: slide 60s linear infinite;
    position: relative;
    z-index: 1;
    
    @keyframes slide {
        0%{
            transform: translate3d(0, 0, 0);
        }
        100%{
            transform: translate3d(-50%, 0, 0);
        }
    }
`;

export const ContentHeaderCTA = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: white;
    line-height: 10rem;
    
    @media (max-width: 425px) {
        font-size: 24px;
    }
`;

export const ContentHeaderWrapper = styled.div`
    background-color: #003366;
    height: 12rem;
    width: 100%;
    text-align: center;
    position: relative;
    cursor: pointer;
`;

export const ContentHeaderDescription = styled.div`
    padding-top: 1rem;
    position: relative;
    color: white;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    line-height: 2rem;
    max-width: 75%;
    margin: auto;

    @media (max-width: 425px) {
        line-height: 8rem;
    }
`;
