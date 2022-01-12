import React from 'react'
import ReactLoading from 'react-loading'
/* https://github.com/fakiolinho/react-loading */

/**
 * Renders a ReactLoading spinning logo, wrapped in a div that gives it prettier
 * default behavior.
 * @param {number} size Size (both height and width) of spinner in pixels.
 * Default is 100. 
 */
function Loading({ size = 100 }) {
    return (
        <div className="col loading">
            <ReactLoading
                type={"spinningBubbles"}
                color={"var(--light-blue)"}
                height={size}
                width={size}
            />
        </div>
    )
}

export default Loading
