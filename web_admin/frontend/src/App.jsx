import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // usestate for setting a javascript
  // object for storing and using status
  const [status, setstatus] = useState({
    game_mode: ""
  });

  // Using useEffect for single rendering
  useEffect(() => {
  		fetch("/status").then((res) =>
  			res.json().then((status) => {
  				// Setting status from api
  				setstatus({
  					game_mode: status.game_mode,
  				});
  			})
  		);
  	}, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <header className="App-header">
        <h1>React and flask</h1>
        {/* Calling /status from setstatus for showing */}
        <p>{status.game_mode}</p>
      </header>
    </>
  )
}

export default App