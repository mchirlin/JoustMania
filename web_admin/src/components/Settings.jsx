import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@mui/material";

export default function Mode() {
    return (
        <center>
            <div style={{ width: "50%" }}>
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
                            <h1>GeeksforGeeks</h1>
                            <p style={{ fontSize: 18 }}>Welcome to the geeks world!</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </center>
    );
}