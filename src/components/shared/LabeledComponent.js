import React from 'react'

/**
 * Renders a label above any components passed as children (ie one label over
 * a group of children, not a label over each child).
 * @param {*} children The component(s) to label.
 * @param {string} label The label.
 */
function LabeledComponent({ children, label = "" }) {

    // Allow label to have more than one line.
    const splitLabelByNewLine = (initial) => {
        const split = initial.split(/\r\n|\r|\n|\\n/)
        return split.filter(s => s);
    }

    // Style the label.
    const labelStyle = {
        marginBottom: "5px",
        width: "100%",
        textAlign: "left",
        whiteSpace: "pre-line",
    }

    return (
        <div className="col">
            {label &&
                splitLabelByNewLine(label).map((l, i) => {
                    return (
                        <h5 key={i} style={labelStyle}>
                            {l}
                        </h5>
                    )
                })}
            {children}
        </div>
    )
}

export default LabeledComponent
