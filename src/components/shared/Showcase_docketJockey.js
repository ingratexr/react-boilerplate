import React from 'react'
import logo from '../../images/ingratePear_128.png'
import { fontSizes, breakpoints, LINE_HEIGHT_ADJ } from './magicConstants'
import useResponseFactor from '../../hooks/useResponseFactor'
import useWindowDimensions from '../../hooks/useWindowSize'

/**
 * Renders the Docket Jockey logo, headline text, and logline paragraph below. 
 */
function Showcase() {
    // Use to adjust font sizes for different screens.
    const resFac = useResponseFactor();
    // Screen width.
    const { width } = useWindowDimensions();
    // When on phone headline text is below logo. Otherwise they're in a row.
    const isPhone = width < breakpoints.phone;
    // Styling for the logo.
    const imgStyle = {
        height: "256px",
        width: "256px",
        marginRight: `${isPhone ? "0px" : "20px"}`,
        marginBottom: `${isPhone ? "20px" : "0px"}`,
    }
    // Styling for the headlines.
    const fontSize = fontSizes.title.medium * resFac
    const headlineStyle = {
        fontFamily: "var(--bold-font)",
        textAlign: `${isPhone ? "center" : "left"}`,
        fontSize: `${fontSize}px`,
        lineHeight: `${fontSize * LINE_HEIGHT_ADJ}px`,
    }

    return (
        <div className="col">
            <div
                className="showcase row to-col-phone"
                style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <img
                    src={logo}
                    style={imgStyle}
                    alt="Docket Jockey logo"
                />
                <div>
                    <h1 style={headlineStyle}>Hello</h1>
                    <h1 style={headlineStyle}>Cruel</h1>
                    <h1 style={headlineStyle}>World</h1>
                </div>
            </div>
        </div>
    )
}

export default Showcase
