// Returns a spacing component to separate elements
import React, { useMemo } from 'react'
import { DEFAULT_LINE_COLOR } from './magicConstants'

/**
 * @param size Total bumper size in pixels along main axis
 * @param line Bumper should include a line perpendicular to main axis (default 
 * false).
 * @param lineWeight Line weight in pixels (default 1).
 * @param lineColor Color of any line (default set in magic constants).
 * @param vertical Primary size axis is vertical - ie, line would be horizontal 
 * (default true).
 * @param crossSize Size of bumper along secondary axis, in pixels (default 0).
 * @returns A spacing element.
 */
function Bumper({
    size = 0,
    line = false,
    lineWeight = 1,
    vertical = true,
    crossSize = 0,
    lineColor = "",
}) {

    const style = useMemo(() => {
        // Returns half the size as a string formatted: '<1/2 size>px'
        // Unless double is true, and then returns full value, not half
        const margin = (sz, double = false) => {
            const num = parseInt(sz);
            if (isNaN(num)) {
                console.log("Why did bumper get non-number input for a size: ", sz);
                return "0px";
            }
            return `${parseInt(num * (double ? 1 : 0.5))}px`;
        }
        const defaultLine =
            `${lineWeight}px solid ${lineColor || DEFAULT_LINE_COLOR}`;
        return {
            margin: vertical
                ? `${margin(size)} ${margin(crossSize)}`
                : `${margin(crossSize)} ${margin(size)}`,
            borderBottom: vertical && line ? defaultLine : "none",
            borderRight: !vertical && line ? defaultLine : "none",
            width: vertical ? "75%" : "0px",
            height: vertical ? "0px" : margin(size, true),
            minHeight: vertical ? "10px" : "10px",
        }
    }, [size, crossSize, line, lineWeight, vertical, lineColor])

    return (
        <div style={style} />
    )
}

export default Bumper
