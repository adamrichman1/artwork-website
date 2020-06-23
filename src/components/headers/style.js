import styled from '@emotion/styled'

export const HomeHeaderImage = styled.img`
    display: block;
    width: 100%;
    max-height: 30rem;
    border-bottom: 1px solid #303030;
`;

export const AboutHeaderImage = styled.img`
    position: absolute;
    bottom: -4rem;
    right: 3%;
    width: 100%;
    @media (max-width: 425px) {
        bottom: 10%;
    }
`;

export const AboutHeaderImageWrapper = styled.div`
    position: relative;
    background-color: #dfdfe5;
    border-bottom: 1px solid #303030;
    width: 100%;
    height: 20rem;
    @media (max-width: 425px) {
        height: 10rem;
    }
`;

export const CategoryHeaderContent = styled.div`
    position: absolute;
    color: #F8F8FF;
    font-weight: bold;
    font-size: 46px;
    z-index: 2;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 28rem;
    width: 100%;
    height: 100%;
    @media (max-width: 425px) {
        line-height: 24rem;
    }
`;

export const CategoryHeaderWrapper = styled.div`
    position: relative;
    overflow-x: hidden;
    width: 100%;
`;

export const SlidingHeader = styled.div`
    background: repeat-x;
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
    color: #303030;
    line-height: 10rem;
    
    @media (max-width: 425px) {
        line-height: 7rem;
        font-size: 24px;
    }
`;

export const ContentHeaderWrapper = styled.div`
    height: 12rem;
    width: 100%;
    text-align: center;
    position: relative;
    cursor: pointer;
`;

export const ContentHeaderDescription = styled.div`
    padding-top: 1rem;
    position: relative;
    color: #303030;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    line-height: 2rem;
    max-width: 75%;
    margin: auto;

    @media (max-width: 425px) {
        padding-top: 2rem;
        line-height: 1rem;
        font-size: 15px;
    }
`;
