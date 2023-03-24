import styled from 'styled-components';
import bgDekstop from '../../assets/images/image-hero-desktop.jpg';

export const Container = styled.header`
  min-width: 100%;
  background-image: url(${bgDekstop});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 1rem;
  min-height: 400px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100px;
    background-color: black;
    opacity: .25;
    filter: blur(28px);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  color: white;
  position: relative;
  z-index: 10;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-weight: 500;
`;