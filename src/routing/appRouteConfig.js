import Home from '../components/pages/Home'
import AccountWrap from '../components/pages/AccountWrap';
import Page from '../components/pages/Page'
import Demo from '../components/pages/Demo';
import SortingAlgos from '../components/sortingAlgos/SortingAlgos';
import AuthPage from '../components/authPages/AuthPage'
import LegalWrap from '../components/legal/LegalWrap';

// Arbitrary title and list of children for the dynamic component for page 2.
const otherPageTitle = "Other Page";

/**
 * This is the syntax/structure to use to programmatically populate React
 * components with data (in this case the title of the page).
 * @param {string} string 
 */
function dynamicPage(string) {
    const temp = () => {
        return (
            <Page title={string}>
                Put children here. Or don't, I really dgaf.
            </Page>
        )
    }
    return temp;
}

/**
 * Sign In, Create Account, and Password Reset pages are all variations of
 * AuthPage.
 * @param {string} id Key to configure the auth page: "signIn", "createAccount", 
 * or "passwordReset".
 */
function getAuthPage(id) {
    const result = () => {
        return (
            <AuthPage id={id} />
        )
    }
    return result;
}

/**
 * List of route objects containing:
 * - path ("/path" or "path")
 * - key (anything unique)
 * - element (the React component to render)
 */
export const appRoutes = [
    {
        path: "/",
        key: "home",
        element: Home,
    },
    {
        path: "/account",
        key: "account",
        element: AccountWrap,
    },
    {
        path: "/demo",
        key: "demo",
        element: Demo,
    },
    {
        path: "/other-page",
        key: "other-page",
        element: dynamicPage(otherPageTitle),
    },
    {
        path: "/sorting-algos",
        key: "sorting-algos",
        element: SortingAlgos,
    },
    {
        path: "sign-in",
        key: "sign-in",
        element: getAuthPage("signIn"),
    },
    {
        path: "create-account",
        key: "create-account",
        element: getAuthPage("createAccount"),
    },
    {
        path: "password-reset",
        key: "password-reset",
        element: getAuthPage("passwordReset")
    },
    {
        path: "legal/*",
        key: "legal",
        element: LegalWrap,
    }
]
