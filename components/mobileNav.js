import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import scrollToElement from "../utils/scrollToElement";

const MobileNav = () => {
  const [currentWidth, setCurrentWidth] = useState("");

  const closeSideMenu = () => {
    setCurrentWidth("0%");
  };

  const openSideMenu = () => {
    setCurrentWidth("100%");
  };

  return (
    <>
      <div>
        <button aria-label="Open Mobile Nav" onClick={openSideMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>

      <div
        className="h-screen w-0 fixed z-2 top-0 right-0 bg-emerald-700 overflow-hidden transition-all font-mons"
        style={{ width: currentWidth }}
      >
        <div className="flex flex-row justify-between px-12 pt-8 items-center">
          <h2 className="text-white text-2xl tracking-widest">SCOTT PETERS</h2>
          <button aria-label="Close Mobile Nav" onClick={closeSideMenu}>
            <FontAwesomeIcon icon={faXmark} size="2x" color="white" />
          </button>
        </div>
        <div className="flex flex-col text-center gap-12 text-3xl text-white mt-24">
          <button
            aria-label="Projects"
            onClick={() => {
              scrollToElement("projects");
            }}
            className="hover:scale-110 transition uppercase"
            href="/"
          >
            Projects
          </button>
          <button
            aria-label="Contact"
            onClick={() => {
              scrollToElement("contact-section");
            }}
            className="hover:scale-110 transition uppercase"
            href="/"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
