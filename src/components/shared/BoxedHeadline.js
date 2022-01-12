import React from 'react'
import { fontSizes, colors } from './magicConstants'
import useResponseFactor from '../../hooks/useResponseFactor';

/**
 * Renders a headline inside a box.
 * @param text The text of the headline.
 * @param fontSize Optionally specify font size, in pixels. (By default will 
 * assume that it's supposed to be big.)
 * @param darkBg True by default (text will be light color; background will be
 * dark color). If false, reversed, and background will have a border.
 * @param darkColor String that CSS needs to understand as a color. A 
 * hexadecimal value including the leading "#"), a CSS color name (eg "blue"), 
 * or a CSS variable named (eg "var(--main-color)") will all work.
 * @param darkColor String that CSS needs to understand as a color. A 
 * hexadecimal value including the leading "#"), a CSS color name (eg "blue"), 
 * or a CSS variable named (eg "var(--main-color)") will all work.
 */
function BoxedHeadline({
    text,
    fontSize,
    darkBg = true,
    darkColor = "",
    lightColor = ""
}) {
    // Set colors to default if not set by params.
    darkColor = darkColor || colors.accent;
    lightColor = lightColor || colors.white;

    // Resize based on screen size.
    const resFac = useResponseFactor();
    const size = (fontSize || fontSizes.title.medium) * resFac;
    const bgStyle = {
        border: `3px solid ${darkColor}`,
        backgroundColor: darkBg ? darkColor : lightColor,
    }
    const textStyle = {
        color: darkBg ? lightColor : darkColor,
        margin: `${size / 3.0}px ${size / 2.0}px`,
        fontSize: `${size}px`,
        fontFamily: "var(--bold-font)",
    }
    return (
        <div style={bgStyle}>
            <h2 style={textStyle}>
                {text}
            </h2>
        </div>
    )
}

export default BoxedHeadline
