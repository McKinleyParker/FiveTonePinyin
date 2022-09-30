import React, { useState } from "react";
import MobileNav from "./mobileNav";

export default function Header() {
  const [menuOpen, setMenu] = useState(false);

  const handleMenuClick = () => {
    console.log("clicked me");
    console.log({ menuOpen });
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <header>
      <div className="navbar">
        <h1 className="title">Five Tone Pinyin</h1>
        <div className="desktop-navbar">
          <div className="navbar-spacer"></div>
          <a href="/home" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/base" className="nav-link">
            Tones
          </a>
          <a href="/type" className="nav-link">
            Free Type
          </a>
          <a href="/test" className="nav-link">
            Test
          </a>
        </div>
        <button className="mobile-burger" onClick={handleMenuClick}>
          <img
            className="burger-icon"
            src="https://i.postimg.cc/hDFNHnNW/Pik-Png-com-white-bars-png-4251166.png"
            alt="burger menu icon"
          />
        </button>
      </div>

      <MobileNav display={menuOpen} />
    </header>
  );
}
