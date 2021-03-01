import { useEffect, useState } from 'react';
import './App.css';
// Import Data and Components
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
    <section>

      <div className="selected-team">
        <h2>Total Auction Player : {player.length}</h2>
        <Selected soldplayer={soldplayer} > </Selected>
      </div>

      <div className="Main-App">
        {
          PlayerData.map(player => <Player player={player} handleSoldPlayer={handleSoldPlayer} key={player.code} > </Player>)
        }
      </div>

    </section>
  );
}

export default App;
