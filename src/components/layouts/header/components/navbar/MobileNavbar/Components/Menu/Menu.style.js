import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  background: white;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 50%;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
  }
`;
