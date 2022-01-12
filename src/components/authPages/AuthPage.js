import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import Loading from '../shared/Loading'
import Bumper from '../shared/Bumper';
import AuthForm from './AuthForm'
import './authPage.css'
import AuthPageLinks from './AuthPageLinks';
import PageWrap from '../shared/PageWrap';

/**
 * Renders a different configuration of an AuthForm component depending on the
 * page: eg, sign in, reset password, or create account.
 * @param id ID for the AuthForm configuration: "signIn", "createAccount", or
 * "passwordReset".
 */
function AuthPage({ id }) {
    // Use logic from Auth Context.
    const { currentUser, signIn, register, resetPassword } = useAuth();

    // Different auth form configurations.
    const configs = [
        {
            id: "signIn",
            title: "Sign In",
            url: "/sign-in",
            requirePassword: true,
            forceAgreeTerms: false,
            requireName: false,
            handleSubmit: SignIn,
        },
        {
            id: "createAccount",
            title: "Create An Account",
            url: "/create-account",
            requirePassword: true,
            forceAgreeTerms: true,
            requireName: false,
            handleSubmit: CreateAccount,
        },
        {
            id: "passwordReset",
            title: "Reset Password",
            url: "/password-reset",
            requirePassword: false,
            forceAgreeTerms: false,
            requireName: false,
            handleSubmit: ResetPassword,
        },
    ];

    // The configuration to use for the AuthForm, set by id.
    const [config] = useState(configs.find(c => {
        return (c.id === id) || null;
    }));

    // For navigation.
    const nav = useNavigate();

    // If the user is already signed in, forward them to their account page.
    useEffect(() => {
        if (currentUser) {
            nav("/account");
        }
    }, [currentUser, nav])

    // Function to use to try to sign in.
    async function SignIn({ email, password }) {
        try {
            await signIn(email, password);
            nav("/account");
            return null;
        } catch (error) {
            return {
                error: true,
                headline: "Invalid username or password",
                body: error.message,
            }
        }
    }

    // Function to use to try to create an account.
    async function CreateAccount({ email, password, firstName, lastName }) {
        try {
            await register(email, password, firstName, lastName);
            nav("/account");
            return null;
        } catch (error) {
            console.log("got error trying to create account: ", error);
            return {
                error: true,
                headline: "Could not create account",
                body: error.message,
            }
        }
    }

    // Function to use to reset the password.
    async function ResetPassword({ email }) {
        try {
            await resetPassword(email);
            return {
                error: false,
                headline: "Check your email",
                body: `We sent a password reset link to ${email}.`
            }
        } catch (error) {
            //console.log("got error trying to reset password: ", error);
            return {
                error: true,
                headline: "Could not reset password",
                body: error.message,
            }
        }
    }

    return (
        <div className="col auth-page">
            {config
                ? <>
                    <PageWrap title={config.title}>
                        <AuthForm config={config} />
                    </PageWrap>
                </>
                : <Loading />}
            <Bumper size={40} />
            {config &&
                <AuthPageLinks
                    configs={configs}
                    activeId={config.id}
                />
            }
        </div>
    )
}

export default AuthPage
