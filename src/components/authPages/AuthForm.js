import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../shared/Alert'
import Loading from '../shared/Loading';
import TextEditor from '../shared/TextEditor';
import BoolEditor from '../shared/BoolEditor';
import Bumper from '../shared/Bumper';
import Button from '../shared/Button'

/**
 * Renders a different form depending on the configuration: sign in, create
 * account, or reset password.
 * @param config The configuration that determines which kind of form to render.
 */
function AuthForm({ config }) {
    // True when waiting for a result.
    const [loading, setLoading] = useState();
    // Success or failure message to show user.
    const [alert, setAlert] = useState(null);
    // True when user has checked box requiring them to agree to terms/privacy.
    const [haveAgreed, setHaveAgreed] = useState(false);
    // Email address user has entered.
    const [email, setEmail] = useState("");
    // Password user has entered.
    const [password, setPassword] = useState("");
    // First name user has entered.
    const [firstName, setFirstName] = useState("");
    // Last name user has entered.
    const [lastName, setLastName] = useState("");
    // Settings destructured from configuration.
    const { requirePassword,
        forceAgreeTerms,
        handleSubmit,
        requireName } = config;
    // Reference to use for the form.
    const formRef = useRef();

    // Clean up function for when component unmounts.
    useEffect(() => {
        return () => {
            setAlert(null);
            setLoading(false);
        }
    }, [])

    // Agree or not to the terms and privacy policy. I couldn't care less.
    const toggleAgreeTerms = () => {
        setHaveAgreed(!haveAgreed);
    }

    // Submit the form with the user's info.
    async function formSubmit(event) {
        event.preventDefault();
        // Don't resubmit if already in process.
        if (loading || buttonDisabled()) return;
        // Clear any exsting alert; show loading spinner instead of button.
        setAlert(null);
        setLoading(true);

        // If it returns a displayable alert or error, show it.
        // Either way, after getting a result set loading to false.
        try {
            const result =
                await handleSubmit({ email, password, firstName, lastName });
            if (result) {
                setAlert(result);
            }
        } catch (error) {
            setAlert(error);
        }
        setLoading(false);
    }

    const termsStyle = { fontWeight: "bolder" }

    const TERMS_TEXT = <p>By creating an account you acknowledge that you have read and agreed to our <Link to={'/legal/terms'} style={termsStyle}>Terms of Service</Link> and <Link to={'/legal/privacy'} style={termsStyle}>Privacy Policy</Link>.</p>

    // Checkbox for agreeing to terms.
    const agreeTermsCheckbox =
        <BoolEditor
            unsavedChanges={false}
            value={haveAgreed}
            onChange={toggleAgreeTerms}
            label={"Terms of Service and Privacy Policy"}
            description={TERMS_TEXT}
            descriptionIsString={false}
        />

    // Returns true if button should be greyed out; false otherwise.
    function buttonDisabled() {
        return ((forceAgreeTerms && !haveAgreed)
            || (requireName && !firstName)
            || !email)
    }

    // Render fields for first and last name if required.
    const names = () => {
        return (
            <div className="row to-col-phone">
                <TextEditor
                    label={"First Name"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    unsavedChanges={false}
                    placeholder={"Nancy"}
                />
                <Bumper size={20} vertical={false} />
                <TextEditor
                    label={"Last Name"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    unsavedChanges={false}
                    placeholder={"Thompson"}
                />
            </div>
        )
    }

    return (
        <form
            className="col auth-form"
            ref={formRef}
            onSubmit={formSubmit}
        >
            {alert &&
                <Alert
                    headline={alert.headline || ""}
                    body={alert.body || ""}
                    error={alert.error || false}
                    timeout={alert.timeout || false}
                />
            }
            {requireName && names()}
            <TextEditor
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                unsavedChanges={false}
                placeholder={"nancy.thompson@langenkamplaw.com"}
            />
            {requirePassword &&
                <TextEditor
                    label={"Password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    unsavedChanges={false}
                    placeholder={"!L0veGl3n"}
                    password={true}
                />
            }
            {forceAgreeTerms && <Bumper size={40} />}
            {forceAgreeTerms && agreeTermsCheckbox}
            <Bumper size={40} />
            {loading
                ? <Loading />
                : <>
                    <Button
                        text="Submit"
                        disabled={buttonDisabled()}
                        onClick={
                            () => formRef.current.dispatchEvent(new Event('submit'))
                        }
                    />

                </>
            }
        </form>
    )
}

export default AuthForm
