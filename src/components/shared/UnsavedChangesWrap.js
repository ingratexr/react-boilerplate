import React from 'react'

/**
 * Renders a component that wraps child components with a warning that their
 * contents are unsaved.
 * @param {*} children The child components to wrap.
 * @param {boolean} unsavedChanges When true, warning will be displayed. When
 * false, it won't.
 */
function UnsavedChangesWrap({ children, unsavedChanges }) {

    // Style the overall component.
    const style = {
        border: `${unsavedChanges ? "1px solid var(--red)" : ""}`,
        borderRadius: "var(--border-radius)",
        width: `${unsavedChanges ? "110%" : "100%"}`,
        padding: `${unsavedChanges ? "5%" : ""}`,
    }

    // Style this component's text. (Not child components' text.)
    const textStyle = {
        color: "var(--red)",
        marginBottom: "10px",
        width: "100%",
        textAlign: "left",
        fontWeight: "400",
    }

    return (
        <div className="col" style={style}>
            {unsavedChanges &&
                <h5 style={textStyle}>
                    Unsaved Changes
                </h5>}
            {children}
        </div>
    )
}

export default UnsavedChangesWrap
