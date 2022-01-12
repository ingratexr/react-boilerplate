import React from 'react'
import { fontSizes, breakpoints } from '../shared/magicConstants'
import useWindowSize from '../../hooks/useWindowSize'

/**
 * Renders a row of links.
 * @param links The link objects/configurations to render. Need to contain a
 * "text" field and an "onClick" field with logic to run when link clicked.
 * @returns 
 */
function LinkRow({ links }) {
    // Reformat depending on window size.
    const { width } = useWindowSize();
    const isPhone = width < breakpoints.phone;

    // Size of both text and, when on phone, bumper between text
    const size = fontSizes.subtitle.small;

    // Style the row.
    const containerStyle = {
        maxWidth: "1000px",
        margin: `${size}px 0px`
    }

    // style each link.
    const linkStyle = {
        fontWeight: "200",
        fontSize: `${size}px`,
        marginBottom: `${isPhone ? size : 0}px`
    }

    // Turn each link into a clickable h3.
    const linkify = (text, onClick, index) => {
        return (
            <h3
                key={index}
                className="clickable"
                style={linkStyle}
                onClick={onClick}
            >
                {text}
            </h3>
        )
    }

    return (
        <div className="row to-col-phone" style={containerStyle}>
            {links.map((l, i) => linkify(l.text, l.onClick, i))}
        </div>
    )
}

export default LinkRow
