import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { breakpoints } from '../shared/magicConstants';

function Visualizer({ list, low, hi, isHelper = false }) {
    const { width } = useWindowSize();
    const isPhone = width < breakpoints.phone;

    // Style the box the lines fit inside of.
    const wrapStyle = () => {
        return (
            {
                width: `${(list.length * (isPhone ? 2 : 4)) + 40}px`,
                position: "relative",
                border: "1px solid var(--very-light-grey)",
                alignItems: "flex-end",
                justifyContent: "center",
                height: "110px",
            }
        )
    }

    // Style the lines representing the integers being sorted.
    const lineStyle = (height, index) => {
        return ({
            width: `${isPhone ? 1 : 2}px`,
            height: `${height}px`,
            backgroundColor: index < low || index > hi
                ? isHelper
                    ? "var(--light-grey)"
                    : "var(--red)"
                : isHelper
                    ? "var(--grey)"
                    : "var(--blue)",
            margin: "0px 1px",
        })
    }

    return (
        <div className="row" style={wrapStyle()}>
            {list.map((l, i) => {
                return (
                    <div key={i} style={lineStyle(l, i)} />
                )
            })}
        </div>
    )
}

export default Visualizer
