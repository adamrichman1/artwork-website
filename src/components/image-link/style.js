import styled from "@emotion/styled/macro";

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: .4s ease;
  background-color: rgba(0, 0, 0, 0);
  color: transparent;
  text-align: center;
  font-size: 80px;
  line-height: 41rem;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Image = styled.img`
    border: 1px solid white;
    height: 41rem;
    width: 41rem;
    
    @media (max-width: 425px) {
        width: 25rem;
        height: 25rem;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
`;
