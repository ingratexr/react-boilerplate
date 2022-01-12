import Legal from './Legal'
import Privacy from './Privacy'
import Terms from './Terms'

/**
 * This is a hard-coded example, but obviously can be reconfigured however makes
 * sense for any given app.
 */
export const legalRoutes = [
    {
        path: "/",
        key: "legal",
        element: Legal,
    },
    {
        path: "/terms",
        key: "terms",
        element: Terms,
    },
    {
        path: "/privacy",
        key: "privacy",
        element: Privacy,
    },
]
