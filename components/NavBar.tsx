import { ButtonGroup, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Item from "./Item";

const MENU_LIST = [
    { text: "All", href: "/" },
    { text: "New", href: "/new" },
  ];
const NavBar = () => {
  const [navActive, setNavActive] = useState<boolean|null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  //we need a line of code here that would update state to isActive down below
  //isActive is an attribute from chakra UI - add this to onClick function where when state is active
  //we add attribute isActive

  //alternatively, can we use useEffect here and add an attribute of isActive to <Item>?
  useEffect(() => {
    const el = Array.from(document.querySelectorAll(".nav__item"));
    console.log(el);
    el.forEach((item) => {
      if (item.hasAttribute("active")) {
      item.setAttribute("active","");
      };
    });
    console.log(el);
}, []);

  return (
    <header>
      <nav className={`nav`}>
        <Flex direction='row' className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <Item active={activeIdx === idx} {...menu}/>
            </div>
          ))}
        </Flex>
      </nav>
    </header>
  );
    
}

export default NavBar;