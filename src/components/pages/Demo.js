import React, { useState, useRef, useEffect } from 'react'
import PageWrap from '../shared/PageWrap'
import LabeledComponent from '../shared/LabeledComponent'
import Alert from '../shared/Alert'
import Bumper from '../shared/Bumper'
import TextEditor from '../shared/TextEditor'
import BoolEditor from '../shared/BoolEditor'
import Button from '../shared/Button'
import UnsavedChangesWrap from '../shared/UnsavedChangesWrap'
import InvalidUrl from '../shared/InvalidUrl'
import Error from '../shared/Error'

function Demo() {
    // Constant starting values for the alert.
    const START_MESSAGE = "Editable Alert Message";
    const START_BODY = "Edit me to change the body of the alert.";
    const START_BOOL = true;

    // Start values that have been "saved".
    const startMessage = useRef(START_MESSAGE);
    const startBody = useRef(START_BODY);
    const startIsError = useRef(START_BOOL);

    // State that stores current values.
    const [message, setMessage] = useState(START_MESSAGE);
    const [body, setBody] = useState(START_BODY);
    const [isError, setIsError] = useState(START_BOOL);

    // Alert that appears when user reloads values.
    const [reloadAlert, setReloadAlert] = useState(null);

    // Constant values for reload alert object.
    const RELOAD_ALERT_OBJ = {
        message: "The Alert above has been reloaded.",
        body: "This alert has a timeout. It will disappear in 3... 2... 1...",
        isError: false,
        timeout: 5000,
        onDismiss: () => setReloadAlert(null),
    }

    // True when there are "unsaved" changes.
    const [unsaveChanges, setUnsavedChanges] = useState(true);

    // Dummy boolean that gets toggled whenever the "saving" logic runs, so
    // that the useEffect hook runs, so that the unsaveChanges state updates
    // corrently. (I'm sure there is a more elegant way to do this; probably
    // with useReducer or something.)
    const [saver, setSaver] = useState(false);

    // Whenever message, body, or isError change, update unsavedChanges.
    useEffect(() => {
        setUnsavedChanges(
            message !== startMessage.current
            || body !== startBody.current
            || isError !== startIsError.current
        )
    }, [message, body, isError, saver])

    // Revert current and "saved" values back to constant starting values.
    const reload = () => {
        startMessage.current = START_MESSAGE;
        startBody.current = START_BODY;
        startIsError.current = START_BOOL;
        setMessage(START_MESSAGE);
        setBody(START_BODY);
        setIsError(START_BOOL);
    }

    // Revert current values to last "saved" values.
    const revert = () => {
        setMessage(startMessage.current);
        setBody(startBody.current);
        setIsError(startIsError.current);
    }

    // "Save" the current values.
    const save = () => {
        startMessage.current = message;
        startBody.current = body;
        startIsError.current = isError;
        setSaver(!saver);
    }

    const pStyle = {
        width: "100%",
        marginBottom: "10px",
    }

    const wrapStyle = {
        border: "1px solid var(--light-grey)",
        borderRadius: "var(--border-radius)",
        padding: "40px 8%",
    }

    return (
        <PageWrap title="The Mother of All Demos">
            <div className="col" style={{ width: "100%", maxWidth: "800px" }}>
                <p style={pStyle}>
                    Below is a very simple demo where you can play with some
                    components I cannibalize and remix all the time:
                    an alert, spacing bumpers, labels, inputs, buttons, etc.
                </p>
                <p style={pStyle}>
                    Eat your heart out, Douglas Engelbart.
                </p>
                <Bumper size={20} />
                <LabeledComponent
                    label="This Part Is Interactive"
                >
                    <div
                        className="col"
                        style={wrapStyle}
                    >
                        <LabeledComponent label="Alert">
                            <Alert
                                message={message}
                                body={body}
                                isError={isError}
                            />
                        </LabeledComponent>
                        <Bumper
                            size={80}
                            line={true}
                            lineColor="var(--light-grey)"
                        />
                        <UnsavedChangesWrap
                            unsavedChanges={unsaveChanges}
                        >
                            <TextEditor
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                label="Single Line Text Editor"
                                placeholder="Enter a message here."
                            />
                            <Bumper size={20} />
                            <TextEditor
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                label="Multiple Line Text Editor"
                                placeholder="Enter a body here."
                                minRows={3}
                                maxRows={5}
                            />
                            <Bumper size={20} />
                            <BoolEditor
                                label="Bool Editor"
                                value={isError}
                                onChange={(e) => setIsError(!isError)}
                                description={`The alert will ${isError ? "" : "not "}` +
                                    `be displayed as an error.`}
                            />
                        </UnsavedChangesWrap>
                        <Bumper
                            size={80}
                            line={true}
                            lineColor="var(--light-grey)"
                        />
                        <LabeledComponent label="Buttons">
                            {reloadAlert &&
                                <Alert
                                    message={reloadAlert.message}
                                    body={reloadAlert.body}
                                    timeout={reloadAlert.timeout}
                                    onDismiss={reloadAlert.onDismiss}
                                    isError={reloadAlert.isError}
                                />
                            }
                            <div
                                className="row to-col-phone"
                                style={{
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Button
                                    size="small"
                                    text="Reload"
                                    pill={true}
                                    darkBg={false}
                                    onClick={() => {
                                        reload();
                                        setReloadAlert(RELOAD_ALERT_OBJ);
                                    }}
                                />
                                <Bumper size={20} vertical={false} />
                                <Button
                                    size="small"
                                    text="Revert"
                                    pill={true}
                                    darkBg={false}
                                    onClick={revert}
                                    disabled={!unsaveChanges}
                                />
                                <Bumper size={20} vertical={false} />
                                <Button
                                    size="medium"
                                    text="Save"
                                    darkBg={true}
                                    onClick={save}
                                    disabled={!unsaveChanges}
                                />
                            </div>
                        </LabeledComponent>
                    </div>
                </LabeledComponent>
                <Bumper size={80} />
                <LabeledComponent label="Invalid Url">
                    <div
                        className="col"
                        style={wrapStyle}
                    >
                        <InvalidUrl />
                    </div>
                </LabeledComponent>
                <Bumper size={80} />
                <LabeledComponent label="Invalid Url">
                    <div
                        className="col"
                        style={wrapStyle}
                    >
                        <Error />
                    </div>
                </LabeledComponent>
            </div>
        </PageWrap>
    )
}

export default Demo
