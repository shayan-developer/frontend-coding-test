import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as MenuIcon } from "assets/menu.svg";

/* ========================================================================== */
/*                                   STYLES                                   */
/* ========================================================================== */

const HeaderContainer = styled.header`
  background-color: #00b4d8;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  z-index: 100;
  position: sticky;
  & svg {
    cursor: pointer;
    & path {
      fill: #fff;
    }
    @media (min-width: 960px) {
      display: none;
    }
  }
  .close {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .mobile-btn {
    width: 2rem;
    height: 2rem;
  }
  .timer{
    font-size: 1.2rem;
    font-weight: bold;

  }
  @media (prefers-color-scheme: dark) {
    background-color: #3b3c36;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
  @media (max-width: 960px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    color: #ccc;
  }
`;


const HumberMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.showMenu ? "0" : "-200%")};
  gap: 1rem;
  height: 100%;
  background-color: #00b4d8;
  transition: all 0.8s ease;
  z-index: -1;
  padding: 1rem;
  width: 100%;
  @media (prefers-color-scheme: dark) {
    background-color: #3b3c36;
  }
`;

/* ------------------------------------ . ----------------------------------- */

// this route is not used in the app

// must use with react-router-dom ****

const navs = [
  {
    path: "#",
    name: "Home",
    id: "home",
  },
  {
    path: "#",
    name: "About",
    id: "about",
  },
  {
    path: "#",
    name: "Contact",
    id: "contact",
  },
  {
    path: "#",
    name: "Blog",
    id: "blog",
  },
];

const Header = ({timer}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderContainer>
      <Navigation>
        {navs.map((nav) => (
          <NavItem key={nav.id} href={nav.path}>
            {nav.name}
          </NavItem>
        ))}
      </Navigation>

      {/* ----- mobile menu ----- */}
      <div className="mobile-btn">
        {showMenu ? (
          <span className="close" onClick={handleMenuClick}>
            &#x2716;
          </span>
        ) : (
          <MenuIcon onClick={handleMenuClick} />
        )}
      </div>

      <MobileNav showMenu={showMenu} />

      <span className="timer">
        {timer} s
      </span>
    </HeaderContainer>
  );
};

const MobileNav = ({ showMenu }) => {
  return (
    <HumberMenu showMenu={showMenu}>
      {navs.map((nav) => (
        <NavItem key={nav.id} href={nav.path}>
          {nav.name}
        </NavItem>
      ))}
    </HumberMenu>
  );
};

export default Header;
