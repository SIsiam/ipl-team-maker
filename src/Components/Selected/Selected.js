import React from 'react';
const Selected = (props) => {
    const soldPlayers = props.soldplayer;


    const totalCost = soldPlayers.reduce((sum, player) => sum + player.Price, 0)



    return (


        // <div>
        //     {
        //         soldPlayers.map(playerName => <li className="selected-player-name"> Sold For KKR : {playerName.name} , Salary : {playerName.Price} </li>)

        //     }
        //     <h2>Selected Sold Player: {soldPlayers.length} </h2>
        //     <h2>Total Price : {totalCost}</h2>

        // </div>
         
         <div className="Show-team" >
         <h2>Selected Sold Player: {soldPlayers.length} </h2>
         <details className="selected-player" >
             <summary>Click And See Selected Players Name :  </summary>
             {
                 soldPlayers.map(playerName => <h2 className="selected-player-name"> Sold For KKR : {playerName.name} , Salary : {playerName.Price} </h2>)

             }

         </details>
         <div className="Total-cost" >
             <h2>Total Price : {totalCost}</h2>

         </div>
     </div>


    );
};

export default Selected;