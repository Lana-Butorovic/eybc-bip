import Link from "next/link";
import React, { useState } from "react";
import Item from "./Item";

const MENU_LIST = [
    { text: "All", href: "/" },
    { text: "New", href: "/new" },
  ];
const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean|null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <Item active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
    
}

export default NavBar;