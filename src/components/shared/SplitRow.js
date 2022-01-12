import React from 'react'
import useWindowDimensions from '../../hooks/useWindowSize';
import { breakpoints } from './magicConstants';

/**
 * Renders a row split into left and right sides. Turns into a column (left side
 * becomes top; right side becomes bottom) when screen size is below a specified
 * threshold.
 * @param left The content that will go on the left (or top).
 * @param right The content that will go on the right (or bottom).
 * @param leftWidth The width (as percentage) that the left side will take up
 * when it's a row.
 * @param breakAt Screen width in pixels below which row should become column.
 * Default is to break for phone.
 * @param darkBg When true (default), row has dark bg. When false, white bg.
 * @param maxWidth Maximum width of the whole row in pixels. Default is 800.
 * @param padding Padding, in pixels, for left and right sides (not the whole 
 * component). Default is 15.
 */
function SplitRow({
    left,
    right,
    leftWidth = 35,
    breakAt = breakpoints.phone,
    darkBg = true,
    maxWidth = 800,
    padding = 15,
}) {

    const { width } = useWindowDimensions();
    const doBreak = width < breakAt;

    const baseStyle = {
        padding: `${padding}px`,
    }

    return (
        <div
            className={`${doBreak ? "col" : "row"}`}
            style={{
                width: "100%",
                maxWidth: `${maxWidth}px`,
                backgroundColor: darkBg ? "var(--dark-white)" : "white",
                border: "1px solid var(--dark-white)",
            }}
        >
            <div
                style={{
                    ...baseStyle,
                    width: doBreak ? "100%" : `${leftWidth}%`,
                    paddingBottom: doBreak ? "0px" : `${padding}px`,
                }}
            >
                {left}
            </div>
            <div
                style={{
                    ...baseStyle,
                    width: doBreak ? "100%" : `${100 - leftWidth}%`
                }}
            >
                {right}
            </div>
        </div>
    )
}

export default SplitRow
