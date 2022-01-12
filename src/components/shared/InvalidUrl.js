import React from 'react';
import Bumper from './Bumper';
import sorry from '../../images/sorry.gif';

/**
 * Render a component that tells the user there is nothing at this URL.
 */
function InvalidUrl() {
    return (
        <div className="col invalid-url">
            <img src={sorry} alt={"sorry..."} />
            <Bumper size={40} />
            <h1>File Not Found</h1>
            <Bumper size={40} />
            {<h3>There doesn't seem to be anything here.</h3>}
        </div>
    )
}

export default InvalidUrl
