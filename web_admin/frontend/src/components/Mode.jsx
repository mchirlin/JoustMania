import { useState, useEffect } from 'react'

export default function Mode() {
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
      <h1>Vite + React</h1>
      <header className="App-header">
        <h1>React and flask</h1>
        {/* Calling /status from setstatus for showing */}
        <p>{status.game_mode}</p>
      </header>
    </>
  )
}