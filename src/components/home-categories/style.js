import styled from '@emotion/styled'

export const Grid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 30rem;
  grid-template-rows: repeat(auto-fill, 20rem);
  margin: 0 auto;
  padding: 0 1.6rem;
  width: 30rem;

  a {
    color: ${ ({ theme }) => theme.black };
    font-size: 1.6rem;
    transition: filter 200ms cubic-bezier(0,0,0,0);
    text-decoration: none;
  }

  a:hover {
    opacity: 0.7;
  }

  @media only screen and (min-width: 760px) {
    grid-template-columns: 30rem 30rem;
    width: 70rem;
  }
`;

export const Wrapper = styled.section`
  display: block;
  width: 100%;
  height: auto;
  transition: background-color 850ms ease-in-out, transform 650ms ease-in-out;
  background-image: url("double-bubble-dark.png");
  background-color: #003366;
`;
