import styled from '@emotion/styled'

export const FooterWrapper = styled.div`
    background-color: #003366;
    height: 11rem;
    width: 100%;
    position: relative;
    text-align: center;
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    position: relative;
`;

export const Contact = styled.a`
    font-size: 15px;
    color: white;
    text-decoration: none;
    &:hover {
        color: yellow;
    }
`;

export const ContactWrapper = styled.div`
    display: inline;
`;

export const Copyright = styled.div`
    padding-top: 1rem;
    font-weight: bold;
    font-size: 9px;
    color: white;
    text-align: center;
`;
