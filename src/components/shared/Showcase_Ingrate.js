import React from 'react'
import logo from '../../images/ingratePear_1024.png'
import useResponseFactor from '../../hooks/useResponseFactor'

/**
 * Renders the showcase for the homepage: pear logo plus text.
 * @returns 
 */
function LogoShowcase({ title, subtitle }) {
    // Scale text and image for screen sizes.
    const resFac = useResponseFactor();

    // 300 is an arbitrary minimum height/magic constant.
    const minImgHeight = 300;

    // 512 is an arbitrary max height/magic constant. (It's the size of the
    // pear logo image.)
    const imgHeight = Math.max(512 * resFac, minImgHeight);

    // 140 and 40 are arbitrary font sizes - they're the right size to look 
    // proportional when resized for different screen sizes.
    const titleSize = 140 * resFac;
    const subtitleSize = 40 * resFac;

    // Style the outermost div.
    const wrapStyle = {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }

    // Style the image.
    const imgStyle = {
        height: `${imgHeight}px`,
        width: "auto",
        padding: "40px",
    }

    // Style the title text.
    const titleStyle = {
        fontFamily: "var(--bold-font)",
        fontSize: `${titleSize}px`,
        color: "black",
        marginBottom: "15px",
        textAlign: "center",
    }

    // Style the subtitle text.
    const subtitleStyle = {
        fontWeight: "100",
        fontSize: `${subtitleSize}px`,
        textAlign: "center",
    }

    return (
        <div className="row to-col-tablet" style={wrapStyle}>
            <img
                src={logo}
                alt="Ingrate pear logo"
                style={imgStyle}
            />
            <div className="col" style={{ width: "auto" }}>
                <h1 style={titleStyle}>{title}</h1>
                <h3 style={subtitleStyle}>{subtitle}</h3>
            </div>
        </div>
    )
}

export default LogoShowcase
