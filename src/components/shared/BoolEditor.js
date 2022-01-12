import React from 'react'
import UnsavedChangesWrap from './UnsavedChangesWrap'
import LabeledComponent from './LabeledComponent'
import Bumper from './Bumper'

/**
 * Renders controlled component with checkbox.
 * @param value The component's value, true or false.
 * @param onChange Function to run when user toggles component.
 * @param label Label to wrap around the component.
 * @param description Blurb to put next to component explaining what it is. Can
 * be either a string or html/object/etc.
 * @param descriptionIsString True when description is string. False if anything
 * else.
 * @param unsavedChanges When true, wraps the component in red outline and warns
 * user that the changes are unsaved.
 */
function BoolEditor({
    value,
    onChange,
    label,
    description,
    descriptionIsString = true,
    unsavedChanges,
}) {

    return (
        <UnsavedChangesWrap
            unsavedChanges={unsavedChanges}
        >
            <LabeledComponent label={label}>
                <label className="row" style={{ justifyContent: "flex-start" }}>
                    <div className="checkbox">
                        <input
                            key={value}
                            type="checkbox"
                            checked={value}
                            onChange={onChange}
                        />
                    </div>
                    <Bumper size={20} vertical={false} />
                    {descriptionIsString
                        ? <p key={value}>{description}</p>
                        : <div key={value}> {description} </div>
                    }
                </label>
            </LabeledComponent>
        </UnsavedChangesWrap>
    )
}

export default BoolEditor
