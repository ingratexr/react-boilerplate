import React from 'react'
import UnsavedChangesWrap from './UnsavedChangesWrap'
import LabeledComponent from './LabeledComponent'
import { TextareaAutosize } from '@material-ui/core'
import Alert from './Alert'

/**
 * Renders a labeled text input field.
 * @param {string} value The current value of the text field.
 * @param {function} onChange Function to run when value changes. Takes an event
 * as a parameter; to get the string the user entered you want e.target.value
 * @param {boolean} unsavedChanges When true, wraps the component with a warning
 * that the current state has not been saved.
 * @param {string} label The label for the field.
 * @param {string} placeholder Placeholder text to display when value is empty.
 * @param {string} error If not an empty string, will display an error above the
 * text field.
 * @param {number} minRows The minimum number of rows to display.
 * @param {number} maxRows The maximum number of rows to display.
 * @param {boolean} password True when this text is being used to enter a
 * password.
 */
function TextEditor({
    value,
    onChange,
    unsavedChanges = false,
    label,
    placeholder,
    error = "",
    minRows = 1,
    maxRows = 1,
    password = false,
}) {

    // Text input field style.
    const style = {
        width: "100%",
        marginTop: "5px",
        minHeight: "35px",
        border: "1px solid var(--light-grey)",
        borderRadius: "var(--text-border-radius)",
        fontFamily: "var(--default-font)",
        fontSize: "16px",
        padding: "5px",
    }

    return (
        <UnsavedChangesWrap
            unsavedChanges={unsavedChanges}
        >
            <LabeledComponent label={label}>
                {error &&
                    <Alert
                        message={error}
                        isError={true}
                    />
                }
                {password
                    ? <input
                        type="password"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        style={style}
                        aria-label="password input"
                    />
                    : <TextareaAutosize
                        minRows={minRows}
                        maxRows={maxRows}
                        aria-label="text input"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        style={style}
                    />
                }
            </LabeledComponent>
        </UnsavedChangesWrap>
    )
}

export default TextEditor
