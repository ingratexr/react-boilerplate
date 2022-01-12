import React from 'react'
import Button from '../shared/Button'
import Bumper from '../shared/Bumper'

function BtnRow({ isRunning, start, stop, reseed }) {
    return (
        <div className="row" style={{ justifyContent: "center" }}>
            {isRunning
                ? <Button
                    disabled={!isRunning}
                    onClick={stop}
                    text="Stop"
                    darkBg={true}
                    size="small"
                    red={true}
                />
                : <>
                    <Button
                        disabled={isRunning}
                        onClick={reseed}
                        text="Re-Seed"
                        size="small"
                    />
                    <Bumper size={20} vertical={false} />
                    <Button
                        disabled={isRunning}
                        onClick={start}
                        text="Sort!"
                        darkBg={true}
                        size="small"
                    />
                </>
            }
        </div>
    )
}

export default BtnRow
