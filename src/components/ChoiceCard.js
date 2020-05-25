import React from 'react'

export default function ChoiceCard(props) {
    return ( 
    <div className={`choice-card ${props.winner ? "winner" : "loser"}`}>
        <h1>{props.title}</h1>
        <img src={props.imgURL} alt={props.title}/>
        <h3>{props.winner ? "Victory" : "Defeated"}</h3>
    </div>
    )
};

// import React, { Component } from 'react'

// export default class ChoiceCard extends Component {
//     render() {
//         return (
//             <div className={`choice-card ${this.props.winner ? "winner" : "loser"}`}>
// //         <h1>{this.props.title}</h1>
// //         <img src={this.props.imgURL} alt={this.props.title}/>
// //         <h3>{this.props.winner ? "Victory" : "Defeated"}</h3>
// //     </div>
//         )
//     }
// }
