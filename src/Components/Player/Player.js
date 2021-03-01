import React from 'react';
import "./Player.css";

const Player = (props) => {
    const { name, Price, email, picture } = props.player;
    const soldPlayerHandle = props.handleSoldPlayer;
    return (
        // <div className="Players">
        //                     <h2> {name} </h2>
        //                 <h4>Price : {Price}</h4>
        //                 <h6>Contact : {email}</h6>
        //                 <button onClick={
        //                     () => soldPlayerHandle(props.player)} > Sold For KKR Team</button>
        // </div>
        <div className="Players">
            <h2 className="player-card">
                <h5>
                    <img  src={picture} alt="" />
                    <h6>
                        <h2> {name} </h2>
                        <h4>Price :  {Price}</h4>
                        <h6>Contact : {email}</h6>
                        <button variant="outline-info" size="lg" onClick={
                            () => soldPlayerHandle(props.player)} >  Sold For KKR Team</button>
                    </h6>
                </h5>
            </h2>
        </div>
    );
};


export default Player;