// // This is one way to import this logo. Another is to get it directly from
// // the public folder. Both are implemented below. Use the one you want.
// import logo from '../../../images/ingratePear_128.png';
import React, { useState } from "react";
import './navbar.css'
import { Link } from 'react-router-dom';
import useWindowSize from "../../../hooks/useWindowSize";
import { Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavLinks from "./NavLinks";
import { breakpoints } from '../../shared/magicConstants';

/**
 * Renders a responsive NavBar across the top of the site.
 */
function NavBar() {
    // When true, open drawer. (This should only ever be relevant on mobile.)
    const [openDrawer, setOpenDrawer] = useState(false);
    // Get the width of the window.
    const { width } = useWindowSize();

    /**
     * The navbar to render for desktop: links are text across the top, with no
     * hamburger icon to open the menu drawer.
     */
    const desktopNavBar = () => {
        return (
            <div className="desktop-nav">
                <NavLinks closeMenu={false} />
            </div>
        )
    }

    /**
     * Hamburger icon that toggles menu drawer open/closed.
     */
    const mobileNavMenuButton = () => {
        return (
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        )
    }

    /**
     * The menu drawer itself.
     */
    const navDrawer = () => {
        return (
            <Drawer
                anchor='right'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <NavLinks closeMenu={() => setOpenDrawer(false)} />
            </Drawer>
        )
    }

    /**
     * Render logo/image no matter what, then either the desktop navbar or the
     * menu toggler depending on screen size.
     */
    return (
        <>
            <nav className="row navbar" style={{ zIndex: "1000" }}>
                <Link to="/" className="navbar-logo">
                    <div className="row">
                        {/* <img src={logo} alt="main logo" /> */}
                        <img
                            src={process.env.PUBLIC_URL + "/ingratePear_128.png"}
                            alt="main logo"
                        />
                        <h1>React Boilerplate</h1>
                    </div>
                </Link>
                {width > breakpoints.tablet
                    ? desktopNavBar()
                    : mobileNavMenuButton()
                }
            </nav>
            {navDrawer()}
        </>
    )
}

export default NavBar
