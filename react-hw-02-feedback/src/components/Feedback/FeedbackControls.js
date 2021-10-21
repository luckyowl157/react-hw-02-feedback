import React from 'react'

export default function FeedbackControls(props) {
    return (
        <div>
            <button onClick={props.onHandleGood}>Good</button>
            <button onClick={props.onHandleNeutral}>Neutral</button>
            <button onClick={props.onHandleBad}>Bad</button>
        </div>
    )
}