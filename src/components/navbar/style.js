import styled from "@emotion/styled";

export const Layout = styled.div`
    width: 100%;
    border-bottom: 1px solid #303030;
    background-color: #F8F8FF;
    height: 4rem;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 3;
    
    @media (max-width: 425px) {
        text-align: center;
    }
`;

export const DropDownWrapper = styled.div`
    position: absolute;
    top: 100%;
`;

export const DropDown = styled.div`
    position: relative;
    top: 100%;
    top: 1.2rem;
    right: 1.3rem;
    border: 1px solid #303030;
    
    @media (max-width: 425px) {
        top: 1.4rem;
        right: 1.4rem;
    }
`;

export const DropDownOption = styled.div`
    font-size: 12px;
    position: relative;
    background-color: #F8F8FF;
    text-align: center;
    line-height: 2rem;
    height: 2rem;
    min-width: 6rem;
    &:hover {
        background-color: #adadb2;
        color: white;
    }
`;

export const Title = styled.div`
    display: inline-block;
    position: absolute;
    font-size: 25px;
    font-weight: bold;
    padding: 1rem;
    padding-left: 26px;
    float: left;
    
    @media (max-width: 425px) {
        visibility: hidden;
    }
`;

export const NavLinkContainer = styled.div`
    float: right;
    @media (max-width: 425px) {
        float: none;
    }
`;

export const NavLink = styled.div`
    position: relative;
    display: inline-block;
    padding-top: 1.4rem;
    padding-right: 2rem;
    font-size: 18px;
    cursor: pointer;
    color: #303030;
    &:hover {
        color: blue;
    }
    @media (max-width: 425px) {
        font-size: 16px;
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;
