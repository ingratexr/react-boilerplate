import React from 'react'
import { RenderRoutes } from '../../routing/Routes'
import { legalRoutes } from './legalWrapConfig'

/**
 * Wraps around the "legal/*" route and renders a Routes component with all
 * child routes.
 * @returns 
 */
function LegalWrap() {
    return (
        <div>
            <RenderRoutes routes={legalRoutes} />
        </div>
    )
}

export default LegalWrap
