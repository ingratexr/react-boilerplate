import React from 'react'
import { Link } from 'react-router-dom'
import PageWrap from '../shared/PageWrap'

/**
 * The route at "/legal". Just contains links to Privacy Policy and Terms of
 * Service.
 */
function Legal() {

    // Note that the "to" field in the links do NOT have a leading slash (ie
    // "terms" is correct; "/terms" is incorrect). No leading slash means it's
    // relative to the current route ("/legal/"). With a leading slash means
    // relative to the root.

    return (
        <PageWrap title="Legal">
            <Link to="terms">
                Terms of Service
            </Link>
            <Link to="privacy">
                Privacy Policy
            </Link>
        </PageWrap>
    )
}

export default Legal
