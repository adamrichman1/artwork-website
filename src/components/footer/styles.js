import styled from '@emotion/styled'

export const FooterWrapper = styled.div`
    background-color: #F8F8FF;
    height: 10rem;
    width: 100%;
    position: relative;
    text-align: center;
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #303030;
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    position: relative;
`;

export const Contact = styled.a`
    font-size: 15px;
    color: #303030;
    text-decoration: none;
    &:hover {
        color: blue;
    }
`;

export const ContactWrapper = styled.div`
    display: inline;
`;

export const Copyright = styled.div`
    padding-top: 1rem;
    font-weight: bold;
    font-size: 9px;
    color: #303030;
    text-align: center;
`;
