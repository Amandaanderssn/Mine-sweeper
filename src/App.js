import './App.css';
import GameBoard from './components/GameBoard';


function App() {
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div className='header'>
        <h1>MINE SWEEPER</h1>
        <p style={{ width: "40vw", margin: "auto" }}>Minesweeper is a classic puzzle video game that challenges players to clear a grid of hidden mines without detonating them. The objective is to reveal all the squares on the grid that do not contain mines, while avoiding the ones that do. </p>
      </div>
      <GameBoard />

    </main>
  );
}

export default App;
