import React from 'react';
// externall css add React 
import "./Player.css";
// Bootstrap use in React  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardDeck, Card } from 'react-bootstrap';
// Thired Perty library use FontAwsome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { name, Price, email, picture } = props.player;
    const soldPlayerHandle = props.handleSoldPlayer;
    return (
        <div className="Players">
            <CardDeck className="player-card" >
                <Card>
                    <img className="player-img" src={picture} alt="" />
                    <Card.Body>
                        <Card.Title><h2> {name} </h2> </Card.Title>
                        <h4>Price :  <FontAwesomeIcon icon={faRupeeSign} /> {Price}</h4>
                        <h6>Contact : {email}</h6>
                        <Button variant="outline-info" size="lg" onClick={
                            () => soldPlayerHandle(props.player)} > <FontAwesomeIcon icon={faHandHoldingUsd} /> Sold For KKR Team</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};


export default Player;