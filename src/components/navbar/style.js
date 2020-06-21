import styled from "@emotion/styled";

export const Layout = styled.div`
    width: 100%;
    background-color: #003366;
    border-bottom: 1px solid white;
    height: 4rem;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 2;
`;

export const DropDownWrapper = styled.div`
    position: absolute;
    top: 100%;
    right: .2rem;
`;

export const DropDown = styled.div`
    position: relative;
    top: 100%;
    top: 1.3rem;
    right: .39rem;
    border: 1px solid #ffffff;
    
    @media (max-width: 425px) {
        top: 1.15rem;
    }
`;

export const DropDownOption = styled.div`
    font-size: 12px;
    position: relative;
    background-color: #003366;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    text-align: center;
    line-height: 2rem;
    height: 2rem;
    min-width: 6rem;
    z-index: 1;
    &:hover {
        background-color: #00264d;
    }
`;

export const Title = styled.div`
    display: inline-block;
    position: absolute;
    color: white;
    font-size: 25px;
    font-weight: bold;
    padding: 1.1rem;
    padding-left: 26px;
    float: left;
    
    @media (max-width: 425px) {
        font-size: 12px;
        visibility: hidden;
    }
`;

export const NavLink = styled.div`
    position: relative;
    float: right;
    display: inline-block;
    color: white;
    padding-top: 1.4rem;
    padding-right: 2rem;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        color: yellow;
    }
`;
