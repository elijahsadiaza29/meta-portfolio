import React from "react";
import { NavLinks } from "../constants/navlinks";

const Navigation = () => {
  return (
    <nav role="navigation" aria-label="Main navigation" className="w-full">
      <ul className="flex space-x-4">
        {NavLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-zinc-100 hover:text-zinc-500">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
