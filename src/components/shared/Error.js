import React from 'react'
import fine from '../../images/everythingIsFine.gif'
import Bumper from './Bumper'

/**
 * Returns an error component, admitting failure to the user.
 * @param message Optional string to display explaining what went wrong.
 */
function Error({ message = "" }) {
    const DEFAULT_MESSAGE = "Something went wrong and we couldn't do " +
        "whatever you were trying to do."

    const SUB_MESSAGE = "The engineers responsible for this catastrophe " +
        "will be dealt with most severely."

    return (
        <div className="col invalid-url">
            <img src={fine} alt={"sorry..."} />
            <Bumper size={40} />
            <h1>There Was An Error</h1>
            <Bumper size={40} />
            <h3>{message || DEFAULT_MESSAGE}</h3>
            <Bumper size={20} />
            <p>{SUB_MESSAGE}</p>
        </div>
    )
}

export default Error
