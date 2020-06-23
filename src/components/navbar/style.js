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
`;

export const DropDownWrapper = styled.div`
    position: absolute;
    top: 100%;
    right: .2rem;
`;

export const DropDown = styled.div`
    position: relative;
    top: 100%;
    top: 1.2rem;
    right: .39rem;
    border: 1px solid #ffffff;
    
    @media (max-width: 425px) {
        top: 1.4rem;
        right: .2rem;
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
    }
`;
