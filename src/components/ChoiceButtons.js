import React from 'react'

export default function ChoiceButtons(props) {
    return (
        <div className="choice-part">
            <button
                className="btn btn-success btn-lg button-choice"
                onClick={() => props.onPlayerChoose("mjollnir")}>Mjollnir
            </button>
            <button
                className="btn btn-success btn-lg button-choice"
                onClick={() => props.onPlayerChoose("tango")}>Tango
            </button>
            <button
                className="btn btn-success btn-lg button-choice"
                onClick={() => props.onPlayerChoose("kaya")}>Kaya
            </button>
        </div>
    )
};