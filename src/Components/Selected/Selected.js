import React from 'react';
// externall css add React 
import './Selected.css';
// use Bootstrap In React  
import { Card } from 'react-bootstrap';
// Use Thired Perty library FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
const Selected = (props) => {
    const soldPlayers = props.soldplayer;

    // Use Reduce 
    const totalCost = soldPlayers.reduce((sum, player) => sum + player.Price, 0)

     // Bangla System For Loop Try 

    /* let totalCost = 0;
    for (let i = 0; i < soldplayer.length; i++) {
        const player = soldplayer[i];
        totalCost = totalCost + player.Price;
        }
    */


    return (

        // Sold player and Total Price 
        
        <div className="Show-team" >
            <h2>Selected Sold Player: {soldPlayers.length} </h2>
            <details className="selected-player" >
                <summary>Click And See Selected Players Name :  </summary>
                {
                    soldPlayers.map(playerName => <Card.Body className="selected-player-name"> Sold For KKR : {playerName.name} , Salary : {playerName.Price} </Card.Body>)

                }

            </details>
            <div className="Total-cost" >
                <h2>Total Price : <FontAwesomeIcon icon={faRupeeSign} /> {totalCost}</h2>

            </div>
        </div>

    );
};

export default Selected;