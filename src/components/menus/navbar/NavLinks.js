// Component that holds the actual list of links for the header menu

import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext.js';
import { config } from './navConfig.js';

/**
 * Component that holds/renders the actua list of links for the header menu.
 * This is factored out to make it easier to reuse them in both the desktop and
 * the mobile nav menus.
 * @param {*} param0 
 * @returns 
 */
function NavLinks({ closeMenu }) {
    /**
     * Non-null when a user is logged in.
     */
    const { currentUser } = useAuth();

    /**
     * When on mobile, close the menu drawer after clicking a link.
     */
    const onClickLink = () => {
        if (closeMenu) {
            closeMenu();
        }
    }

    return (
        <ul className="row to-col-tablet nav-links">
            {config(currentUser).map((link, index) => {
                return (
                    link.link
                        ? <Link key={index} to={link.link} onClick={onClickLink}>
                            <li className="nav-link">{link.text}</li>
                        </Link>
                        : null
                )
            })}
        </ul>
    )
}

export default NavLinks
