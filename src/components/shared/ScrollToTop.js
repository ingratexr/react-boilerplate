// Scroll to top of window whenever page changes
// Redone for react-router-dom v6 (v5 worked different, with useHistory)
// A good place to add it in the app is in the index.js file, as a child of the 
// BrowserRouter component/sibling of the App component.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

/**
 * Component that automatically scrolls to the top of the window whenever the
 * page changes. This version works correctly with react-router-dom v6 (v5
 * worked differently, with useHistory, so this component won't work with v5).
 * A good place to put add this to the app is in the index.js file, as a child
 * of the BrowserRouter component/as a sibiling of the App component.
 * @returns 
 */
function ScrollToTop() {
    const { pathname } = useLocation();

    // Whenever the pathname changes, scroll to the top of the window.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
export default ScrollToTop;
