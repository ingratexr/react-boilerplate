import React from 'react'
import PageWrap from '../shared/PageWrap'
import Button from '../shared/Button'
import { useAuth } from '../../contexts/AuthContext'

/**
 * Renders a fake account page that lets you... sign out.
 */
function Account() {
    const { signOut } = useAuth();
    return (
        <PageWrap title="Account">
            <Button
                text="Sign Out"
                onClick={signOut}
            />
        </PageWrap>
    )
}

export default Account
