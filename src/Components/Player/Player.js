import React from 'react';

const Player = (props) => {
    const { name, Price, email } = props.player;
    const soldPlayerHandle = props.handleSoldPlayer;
    return (
        <div className="Players">
                            <h2> {name} </h2>
                        <h4>Price : {Price}</h4>
                        <h6>Contact : {email}</h6>
                        <button onClick={
                            () => soldPlayerHandle(props.player)} > Sold For KKR Team</button>
        </div>
    );
};


export default Player;