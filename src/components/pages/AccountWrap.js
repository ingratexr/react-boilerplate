import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom'
import Account from './Account';
// ** MAYBE UNCOMMENT ME **
// import { AcctProvider } from '../../contexts/AcctContext';

/**
 * Wraps the Account page. If there is no user signed in, redirects to the 
 * sign in page. If there is a user signed in, wraps the Account component in
 * the AcctProvider context.
 * @returns 
 */
function AccountWrap() {
    const { currentUser } = useAuth();

    return (
        <div className="col">
            {currentUser
                // ** UNCOMMENT ME IF WANT USE AN ACCT-SPECIFIC CONTEXT **
                // ? <AcctProvider>
                //     <Account />
                // </AcctProvider>

                // ** MAYBE DELETE ME **
                ? <Account />
                : <Navigate to={"/sign-in"} />}
        </div>
    )
}

export default AccountWrap
