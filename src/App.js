import { useEffect, useState } from 'react';
import './App.css';
import PlayerData from './Data/FakeData.json';
import Player from './Components/Player/Player';
import Selected from './Components/Selected/Selected';


function App() {
  const [player, setPlayer] = useState([]);
  const [soldplayer, setSoldplayer] = useState([]);

  useEffect(() => {
    setPlayer(PlayerData)
  }, [])

  const handleSoldPlayer = (Player) => {
    const newSoldCount = [...soldplayer, Player]
    setSoldplayer(newSoldCount)
  }

  return (
    <div className="App">
        <h2>Total Auction Player : {player.length}</h2>
        <Selected soldplayer={soldplayer} > </Selected>

        {
          PlayerData.map(player => <Player player={player} handleSoldPlayer={handleSoldPlayer} key={player.code} > </Player>)
        }
    </div>
  );
}

export default App;
