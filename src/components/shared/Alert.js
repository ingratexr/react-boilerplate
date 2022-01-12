import React, { useEffect } from 'react'
import CloseButton from './CloseButton';
import { colors } from './magicConstants'

/**
 * Returns an alert component.
 * @param message Headline of the alert.
 * @param body More detailed body of the alert.
 * @param isError True if this alert is a warning (styles it in red). True by 
 * default.
 * @param onDismiss Optional callback to dismiss the alert (when present without
 * timeout, close button appears).
 * @param timeout Number of milliseconds after which to automatically call 
 * onDismiss.
 */
function Alert({
    message,
    body,
    isError = true,
    onDismiss = null,
    timeout = false
}) {
    /**
     * Resolve a promise after some number of milliseconds.
     * @param {number} ms How many milliseconds to wait before resolving.
     */
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // If there's a timeout, activate self destruct
    useEffect(() => {
        /**
         * Wait for timeout milliseconds, then call onDismiss logic.
         * This function exists to wrap the async logic, because React doesn't
         * like useEffect running async logic.
         */
        async function sleepThenExcuseSelf() {
            await sleep(timeout);
            onDismiss();
        }

        // Call the async function only if there is a timeout specified.
        if (timeout) {
            sleepThenExcuseSelf();
        }
    }, [timeout, onDismiss])

    return (
        <div className={`col alert ${isError ? "alert-error" : ""}`}>
            <div
                className="row"
                style={{ justifyContent: "space-between" }}
            >
                {message &&
                    <h3 style={{ width: "100%" }}>
                        {message}
                    </h3>
                }
                {onDismiss &&
                    <CloseButton
                        onClose={onDismiss}
                        color={colors.grey}
                    />
                }
            </div>
            {body &&
                <p>
                    {body}
                </p>
            }
        </div>
    );
}

export default Alert
