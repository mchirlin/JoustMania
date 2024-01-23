import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import SettingsIcon from '@mui/icons-material/Settings';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@mui/material";

export default function Home() {

  const [modes, setmodes] = useState({
    modes: []
  });

   useEffect(() => {
   		fetch("/game_modes").then((res) =>
   			res.json().then((modes) => {
   				// Getting modes from backend server
   				setmodes(modes);
   			})
   		);
   	}, []);

 return (
    <center>
      <div style={{ width: "100%" }}>
        <Grid container justifyContent="center" spacing={2}>
          {modes.map((item, index) => (
            <Grid item key={index}>
             <Card sx={{ maxWidth: 345 }}>
               <CardActionArea>
                 <CardContent>
                  <div>{item.name}</div>
                 </CardContent>
               </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </center>
  );
}