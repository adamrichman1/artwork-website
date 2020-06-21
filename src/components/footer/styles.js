import styled from '@emotion/styled'

export const FooterWrapper = styled.div`
    background-color: #003366;
    height: 19rem;
    width: 100%;
    position: relative;
`;

export const FooterTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 2rem;
`;

export const FooterContact = styled.div`
    font-size: 15px;
    color: white;
    text-align: center;
    padding-bottom: 1rem;
`;

export const FooterSocialMedia = styled.a`
    display: inline;
    font-size: 15px;
    color: white;
    text-decoration: none;
    &:hover {
        color: yellow;
    }
`;

export const FooterSocialMediaWrapper = styled.div`
    text-align: center;
    padding-bottom: 1rem;
`;

export const FooterCopyright = styled.div`
    font-weight: bold;
    font-size: 9px;
    color: white;
    text-align: center;
`;
