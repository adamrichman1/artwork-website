import styled from "@emotion/styled";

export const Layout = styled.div`
    width: 100%;
    background-color: #003366;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    height: 4em;
`;

export const DropDown = styled.div`
    float: right;
    display: inline-block;
    padding-top: 21px;
    padding-right: 28px;
    font-size: 18px;
    
    
    position: relative;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

export const Title = styled.div`
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: bold;
    padding: 16px;
    padding-left: 26px;
    float: left;
`;

export const NavLink = styled.div`
    float: right;
    display: inline-block;
    color: white;
    padding-top: 21px;
    padding-right: 28px;
    font-size: 18px;
    &:hover {
        color: yellow;
    }
`;
