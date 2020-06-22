import styled from '@emotion/styled'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
`;

export const Image = styled.img`
    margin-top: 10%;
    width: 33%;
    border: solid 17px rgba(77, 77, 77, 0.8);
`;

export const PrevNavButton = styled.a`
    color: #fafafa;
    background-color: #333;
    border: solid 3px #777;
    padding: 5px 15px;
    border-radius: 20px;
    text-decoration: none;
    cursor: pointer;
    vertical-align: middle;
    position: relative;
    top: -40%;
    left: -3%;
    
    &:hover {
        background-color: #111;
    }
`;

export const NextNavButton = styled.a`
    color: #fafafa;
    background-color: #333;
    border: solid 3px #777;
    padding: 5px 15px;
    border-radius: 20px;
    text-decoration: none;
    cursor: pointer;
    vertical-align: middle;
    position: relative;
    top: -40%;
    right: -3%;
    
    &:hover {
        background-color: #111;
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    right: 2%;
    top: 2%;
    color: #fafafa;
    background-color: #92001d;
    border: solid 5px #ef4036;
    padding: 10px 20px;
    border-radius: 1px;
    text-decoration: none;
    font-size: 20pt;
    cursor: pointer;
    &:hover {
        background-color: #740404;
    }
`;
