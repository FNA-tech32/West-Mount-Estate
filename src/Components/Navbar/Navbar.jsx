import React, { useState, useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: handleOutsideClick,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 781) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleOutsideClick() {
    setIsOpen(false);
  }

  return (
    <header ref={ref} className="py-4 px-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <NavLink to="/" className="flex items-center gap-2 no-underline" onClick={() => setIsOpen(false)}>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 m-0">
              <span className="text-secondary">West Mount</span> Estate
            </h2>
          </NavLink>
        </div>

        <nav
          className={`md:block z-20 ${
            !isOpen
              ? "hidden"
              : "absolute top-[4.5rem] right-[1rem] bg-white py-8 px-10 shadow-xl rounded-2xl border border-gray-100"
          }`}
        >
          <ul
            className={`list-none p-0 m-0 list__style md:flex md:gap-8 flex-col md:flex-row items-start md:items-center ${
              !isOpen ? "hidden md:flex" : "flex flex-col gap-5"
            }`}
          >
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? "text-secondary font-semibold" : "text-gray-700 hover:text-secondary"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="/#booking"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-secondary transition-colors"
              >
                Booking
              </a>
            </li>
            <li>
              <a
                href="/#facilities"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-secondary transition-colors"
              >
                Facilities
              </a>
            </li>
            <li>
              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-secondary transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/#location"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-secondary transition-colors"
              >
                Location
              </a>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? "text-secondary font-semibold" : "text-gray-700 hover:text-secondary"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <NavLink to="/login">
            <button className="rounded-[35px] py-2 px-6 primary-button text-sm font-semibold">
              Login
            </button>
          </NavLink>
          <button
            className="md:hidden p-2 text-gray-700 hover:text-secondary focus:outline-none"
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
