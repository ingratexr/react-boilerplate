import React from 'react'
import useResponseFactor from '../../hooks/useResponseFactor'
import { fontSizes } from '../shared/magicConstants'

/**
 * Renders a title and then a page below it.
 * @param {string} title The title of the page (optional).
 * @param {*} children The components of the page.
 * @returns 
 */
function PageWrap({ children, title }) {
    // Scale the font based on screen size.
    const resFac = useResponseFactor();

    // Style the title.
    const titleStyle = {
        fontFamily: "var(--bold-font)",
        fontSize: `${fontSizes.title.medium * resFac}px`,
        margin: "30px 0px",
    }

    // Style the page.
    const pageStyle = {
        width: "var(--page-width)",
        maxWidth: "var(--max-page-width)",
    }

    return (
        <div
            className="col"
            style={pageStyle}
        >
            {title &&
                <h1 style={titleStyle}>
                    {title}
                </h1>
            }
            {children}
        </div>
    )
}

export default PageWrap
