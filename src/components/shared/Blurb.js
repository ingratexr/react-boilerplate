import React from 'react'
import useResponseFactor from '../../hooks/useResponseFactor'
import useWindowSize from '../../hooks/useWindowSize';
import { breakpoints } from './magicConstants';

/**
 * Renders a relatively important/highlighted section of text, with or without 
 * a title.
 * @param {string} title Optional title
 * @param {string} text The text to render. 
 */
function Blurb({ title, text }) {
    // Responsive based on screen size.
    const { width } = useWindowSize();
    const isPhone = width < breakpoints.phone;
    const resFac = useResponseFactor();

    // Don't use the resFactor raw - it rescales the text too much - instead
    // adjust it with the magic constant of 1.25 to lessen its effect.
    const titleSize = 40 * Math.min(resFac * 1.25, 1);
    const textSize = 30 * Math.min(resFac * 1.25, 1);

    // Style the outermost wrap.
    const wrapStyle = {
        width: "100%",
        maxWidth: "calc(0.75 * var(--max-page-width)",
    }

    // Style the title.
    const titleStyle = {
        fontFamily: "var(--bold-font)",
        width: "100%",
        textAlign: isPhone ? "center" : "left",
        fontSize: `${titleSize}px`,
        marginBottom: "15px",
    }

    // Style the text.
    const textStyle = {
        width: "100%",
        fontSize: `${textSize}px`,
        fontWeight: "200",
        textAlign: isPhone ? "center" : "left",
    }

    return (
        <div className="col" style={wrapStyle}>
            {title && <h3 style={titleStyle}>{title}</h3>}
            <p style={textStyle}>{text}</p>
        </div>
    )
}

export default Blurb
