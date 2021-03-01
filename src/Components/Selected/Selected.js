import React from 'react';

const Selected = (props) => {
    const soldPlayers = props.soldplayer;


    const totalCost = soldPlayers.reduce((sum, player) => sum + player.Price, 0)



    return (
        <div>
            {
                    soldPlayers.map(playerName => <li className="selected-player-name"> Sold For KKR : {playerName.name} , Salary : {playerName.Price} </li>)

                }
            <h2>Selected Sold Player: {soldPlayers.length} </h2>
            <h2>Total Price : {totalCost}</h2>
            
        </div>
    );
};

export default Selected;