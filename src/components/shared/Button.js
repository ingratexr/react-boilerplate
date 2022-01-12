import React, { useMemo } from 'react'
import useResponseFactor from '../../hooks/useResponseFactor';
import { fontSizes } from './magicConstants';

/**
 * Renders a button that does a thing when clicked.
 * @param text Text the button will display
 * @param onClick Logic to run when button is clicked
 * @param size "small", "medium", or "large". Default is medium.
 * @param darkBg When true, text is white and button is purple/red. When false,
 * text and outline are purple/red and background is white.
 * @param red When true, button's color is red. (When false it's purple.)
 * @param pill When true, button is a pill. When false, rounded rectangle.
 */
function Button({
    text = "",
    onClick,
    size = "medium",
    darkBg = false,
    disabled = false,
    red = false,
    pill = false,
}) {
    // Factor by which to change font/padding/margin, depending on screen size
    const resFactor = useResponseFactor();

    // Arbitrarily large radius to make buttons into pills
    const PILL_RADIUS = "1000px";

    // Create memoized object to style button
    const style = useMemo(() => {
        // Font sizes
        const lg = fontSizes.button.large;
        const md = fontSizes.button.medium;
        const sm = fontSizes.button.small;

        // Size font/padding/margin based on button size and response factor
        const sizeStuff = () => {
            let sz = md * resFactor;
            switch (size) {
                case "small":
                    sz = sm * resFactor;
                    break;
                case "large":
                    sz = lg * resFactor;
                    break;
                default:
                    break;
            }
            return {
                margin: `${sz * 0.5}px`,
                padding: `${sz * 0.5}px ${sz * 0.75}px`,
                fontSize: `${sz}px`,
                fontWeight: "bolder",
            };
        }
        // Set the text and background colors, depending on whether button is
        // disabled, red, darkBG or light BG
        const colorStuff = () => {
            const borderSize = size === "large" ? 3 : size === "medium" ? 2 : 1;
            const buttonColor = disabled
                ? "light-grey"
                : red
                    ? "red"
                    : "button";
            const bgColor = darkBg ? buttonColor : "white";
            const textColor = darkBg ? "white" : buttonColor;
            return {
                backgroundColor: `var(--${bgColor})`,
                border: `${borderSize}px solid var(--${buttonColor})`,
                color: `var(--${textColor})`,
            }
        }

        return {
            ...sizeStuff(),
            ...colorStuff(),
            cursor: disabled ? "auto" : "pointer",
            //whiteSpace: "nowrap",
            fontFamily: "var(--bold-font)",
            fontWeight: "bolder",
            borderRadius: pill ? PILL_RADIUS : "var(--border-radius)",
            textAlign: "center",
        }
    }, [size, darkBg, disabled, red, pill, resFactor])

    return (
        <button
            style={style}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button
