import React from 'react'

export default function ChoiceButtons(props) {
    return (
        <div className="container">
            <button
                className="btn btn-success btn-lg"
                onClick={() => props.onPlayerChoose("mjollnir")}>Mjollnir
            </button>
            <button
                className="btn btn-success btn-lg"
                onClick={() => props.onPlayerChoose("tango")}>Tango
            </button>
            <button
                className="btn btn-success btn-lg"
                onClick={() => props.onPlayerChoose("kaya")}>Kaya
            </button>
        </div>
    )
};