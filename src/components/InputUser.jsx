import React, { Fragment } from 'react'

function InputUser(props) {
    return <Fragment> {
        props.userName = "" ? <input /> : <h1>{props.userName}</h1>
    }
    </Fragment>
};