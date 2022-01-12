import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Renders the links that should appear below the AuthForm, depending on which
 * configuration of AuthForm is being displayed (ie it doesn't display a link
 * to the page you're already on).
 * @param activeId ID for the current configuration of the AuthForm.
 * @param configs The possible configurations of the AuthForm. 
 */
function AuthPageLinks({ activeId, configs }) {

    return (
        <div className="row to-col-phone auth-page-links">
            {configs.map((config, index) => {
                // Don't link to the page they're already on
                if (config.id === activeId) {
                    return null;
                }
                return (
                    <Link
                        to={config.url}
                        key={config.id}
                        className={"auth-page-link-item unstyle-links"}
                    >
                        {config.title}
                    </Link>
                )
            })}
        </div>
    )
}

export default AuthPageLinks
