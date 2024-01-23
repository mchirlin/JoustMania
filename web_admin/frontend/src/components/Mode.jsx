import React from 'react';
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

const icons = [
  { icon: <HomeIcon style={{ fontSize: 100 }}/>, label: 'Home' },
  { icon: <SportsEsportsIcon style={{ fontSize: 100 }}/>, label: 'Mode' },
  { icon: <Battery4BarIcon style={{ fontSize: 100 }}/>, label: 'Controllers' },
  { icon: <SettingsIcon style={{ fontSize: 100 }}/>, label: 'Settings' },
  { icon: <HomeIcon style={{ fontSize: 100 }}/>, label: 'Home' },
  { icon: <SportsEsportsIcon style={{ fontSize: 100 }}/>, label: 'Mode' },
  { icon: <Battery4BarIcon style={{ fontSize: 100 }}/>, label: 'Controllers' },
  { icon: <SettingsIcon style={{ fontSize: 100 }}/>, label: 'Settings' },
  { icon: <HomeIcon style={{ fontSize: 100 }}/>, label: 'Home' },
  { icon: <SportsEsportsIcon style={{ fontSize: 100 }}/>, label: 'Mode' },
  { icon: <Battery4BarIcon style={{ fontSize: 100 }}/>, label: 'Controllers' },
  { icon: <SettingsIcon style={{ fontSize: 100 }}/>, label: 'Settings' },
];

export default function Home() {

  const [status, setstatus] = useState({
    game_mode: ""
  });

  const [modes, setmodes] = useState({
    modes: []
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

   useEffect(() => {
   		fetch("/modes").then((res) =>
   			res.json().then((modes) => {
   				// Setting status from api
   				setmodes({
   					game_modes: modes,
   				});
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
  {/*                         <CardMedia */}
  {/*                             component="img" */}
  {/*                             height="180" */}
  {/*                             image= */}
  {/*  "https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png" */}
  {/*                             alt="gfg" */}
  {/*                         /> */}
                   <CardContent>
                    <div>{item.name}</div>
{/*                      {item.icon} */}
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