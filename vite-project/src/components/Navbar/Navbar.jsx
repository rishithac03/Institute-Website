import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, } from "lucide-react";
import { useLocation } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [authMenu, setAuthMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if ( dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setDropdown(false);
            }
        }
        document.addEventListener( "mousedown", handleClickOutside );
        return () => {
            document.removeEventListener( "mousedown", handleClickOutside); 
        };
    }, []);

    const location = useLocation();
    useEffect(() => {
        setDropdown(false);
        setAuthMenu(false);
        setMobileMenu(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <NavLink to="/" className="logo">
                <div className="logo-circle"> OR </div>
                    <div> <h2>Offera</h2></div>
                </NavLink>
                <nav className="desktop-nav">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                    <div className="dropdown" ref={dropdownRef} onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=> setDropdown(false)}>
                        <NavLink to="/collaborations" className="collab-link" onClick={() => setDropdown(!dropdown)}> Collaborations </NavLink>
                        {dropdown && (
                            <div className="dropdown-menu">
                                <div className="dropdown-links">
                                    <NavLink to="/collaborations"> Institutes </NavLink>
                                    <NavLink to="/collaborations"> Partner Companies </NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to="/testimonials"> Testimonials </NavLink>
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
                            }}>
                        {(authMenu || mobileMenu) ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    {authMenu && (
                        <div className="auth-dropdown" >
                            <NavLink to="/careers"> Career Opportunities </NavLink>
                            <NavLink to="/jobs"> Job Predictions </NavLink>
                            <NavLink to="/resources"> Resources </NavLink>
                        </div>
                    )}
                    {mobileMenu && (
                        <>
                        <div className="overlay" onClick={() => setMobileMenu(false)}></div>
                        <div className="mobile-drawer">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/courses">Courses</NavLink>
                            <NavLink to="/collaborations"> Collaborations </NavLink>
                            <NavLink to="/testimonials"> Testimonials </NavLink>
                            <NavLink to="/contact"> Contact </NavLink>
                            <NavLink to="/careers"> Career Opportunities </NavLink>
                            <NavLink to="/jobs"> Jobs </NavLink>
                            <NavLink to="/resources"> Resources </NavLink>
                            <NavLink to="/register"> Register </NavLink>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </header>

    );

}

export default Navbar;