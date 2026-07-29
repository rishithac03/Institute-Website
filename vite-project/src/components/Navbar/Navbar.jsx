
import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [authMenu, setAuthMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setDropdown(false);
        setAuthMenu(false);
        setMobileMenu(false);
    }, [location]);

    return (
        <div>
            <header className="navbar">
                <div className="container">
                    <NavLink to="/" className="logo">
                        <div className="logo-circle">OR</div>
                        <div> <h2>OfferEra</h2> </div>
                    </NavLink>

                    <nav className="desktop-nav">
                        <NavLink to="/" end> Home </NavLink>
                        <NavLink to="/about"> About </NavLink>
                        <NavLink to="/courses"> Courses </NavLink>
                        <div className="dropdown" ref={dropdownRef} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} >
                            <NavLink to="/collaborations" className="collab-link"> Collaborations </NavLink>
                            {dropdown && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-links">
                                        <HashLink smooth to="/collaborations#colleges"> Colleges </HashLink>
                                        <HashLink smooth to="/collaborations#companies"> Partner Companies </HashLink>
                                    </div>
                                </div>
                            )}
                        </div>
                        <NavLink to="/successstories"> Achievements </NavLink>
                        <NavLink to="/contact"> Contact </NavLink>
                        <NavLink to="/register" className="register-btn"> Register </NavLink>
                    </nav>
                    <div className="menu-container">
                        <button className="menu-btn" onClick={() => {
                                if (window.innerWidth <= 992) {
                                    setMobileMenu(!mobileMenu);
                                } else {
                                    setAuthMenu(!authMenu);
                                }
                            }} >
                            {(authMenu || mobileMenu) ? ( <X size={28} /> ) : ( <Menu size={28} /> )}
                        </button>
                        {authMenu && (
                            <div className="auth-dropdown">
                                <NavLink to="/careers"> Career Opportunities </NavLink>
                                <NavLink to="/jobs"> Job Predictions </NavLink>
                                <NavLink to="/resources"> Resources </NavLink>
                                <NavLink to="/certificate"> Certificate Generation </NavLink>
                                <NavLink to="/careerevent"> Career Event Calendar </NavLink>
                            </div>
                        )}
                        {mobileMenu && (
                            <>
                                <div className="overlay" onClick={() => setMobileMenu(false)} ></div>
                                <div className="mobile-drawer">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/about">About</NavLink>
                                    <NavLink to="/courses">Courses</NavLink>
                                    <NavLink to="/collaborations"> Collaborations </NavLink>
                                    <NavLink to="/successstories"> Achievements </NavLink>
                                    <NavLink to="/contact"> Contact </NavLink>
                                    <NavLink to="/careers"> Career Opportunities </NavLink>
                                    <NavLink to="/jobs"> Jobs Predictions </NavLink>
                                    <NavLink to="/resources"> Resources </NavLink>
                                    <NavLink to="/certificate"> Certificate Generation </NavLink>
                                    <NavLink to="/careerevent"> Career Event Calendar </NavLink>
                                    <NavLink to="/register"> Register </NavLink>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </header>
            <div className="ticker">
                <div className="ticker-content">
                    <h4>
                        🚀 Admissions Open 2026 • 100% Placement Assistance •
                        Industry Experts • Live Projects • Register Now 🚀
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Navbar;