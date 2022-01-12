import React from 'react'
import { IconButton } from '@material-ui/core';
import { Close } from "@material-ui/icons";
import { colors } from './magicConstants';

/**
 * Renders an "X" button.
 * @param onClose Function called when button pressed.
 * @param color What color the button should be (hex string).
 * @param align Button's alignment in its div (right (default), left, center).
 */
function CloseButton({
    onClose,
    color = "",
    align = "right"
}) {
    // Arbitrary color choice.
    const DEFAULT_COLOR = colors.lightGrey;

    // Style the div that wraps the button.
    const style = () => {
        // By default align right
        let result = "flex-end";
        switch (align) {
            // Align left if specified
            case "left":
                result = "flex-start";
                break;
            // Align center if specified
            case "center":
                result = "space-around";
                break;
            // Align right all other times
            default:
                break;
        }
        return {
            justifyContent: result,
        }
    }

    return (
        <div className="flx-row" style={style()}>
            <IconButton onClick={onClose}>
                <Close
                    fontSize="large"
                    style={{
                        fill: color || DEFAULT_COLOR
                    }}
                />
            </IconButton>
        </div>
    )
}

export default CloseButton
