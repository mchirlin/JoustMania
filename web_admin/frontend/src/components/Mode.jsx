import { useState, useEffect } from 'react'

export default function Mode() {
  // usestate for setting a javascript
  // object for storing and using status
  const [status, setstatus] = useState({
    game_modes: []
  });

  // Using useEffect for single rendering
  useEffect(() => {
  		fetch("/game_modes").then((res) =>
  			res.json().then((game_modes) => {
  				// Setting status from api
  				setstatus({
  					game_modes: game_modes,
  				});
  			})
  		);
  	}, []);

  return (
    <>
      <h1>Vite + React</h1>
      <header className="App-header">
        <h1>React and flask</h1>
        {/* Calling /status from setstatus for showing */}
        <p>{status.game_modes}</p>
      </header>
    </>
  )
}