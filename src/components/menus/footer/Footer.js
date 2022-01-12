import React from 'react'
import { Link } from 'react-router-dom'
import { config } from './footerConfig';
import './foot.css'

/**
 * Renders a boilerplate footer based on the imported config object.
 */
function Footer() {
    const { links, email, copyright } = config;
    return (
        <div className="col footer unstyle-links">
            <ul>
                {links.map((l, i) => {
                    return (
                        <Link key={i} to={l.to}>
                            <li>{l.text}</li>
                        </Link>
                    )
                })}
                {email &&
                    <li>
                        <a href={`mailto: ${email}`}>
                            {email}
                        </a>
                    </li>
                }
                <li>
                    Copyright &copy; {copyright?.year || ""} {copyright?.holder || ""}
                </li>
            </ul>
        </div>
    )
}

export default Footer
