import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav(props) {
  if (props.display === true) {
    return (
      <div className="mobile-navbar">
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
    );
  } else {
    return <span></span>;
  }
}
