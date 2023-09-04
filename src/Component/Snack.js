import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
//import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Image from 'react-bootstrap/Image';
// import Carousel from 'react-bootstrap/Carousel';
//import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import TableList from "./Tablelist";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const tablesData = [
    { id: 1, name: "โต๊ะ 1", isOccupied: true },
    { id: 2, name: "โต๊ะ 2", isOccupied: false },
    { id: 3, name: "โต๊ะ 3", isOccupied: false },
    // เพิ่มข้อมูลโต๊ะเพิ่มเติมตามต้องการ
];

function Menu() {
    return (
        <div className="menu">
            <TableList tables={tablesData} />
        </div>
    );
}
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const defaultTheme = createTheme();

export default function Album() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/menu/snack")
            .then(res => res.json())
            .then(
                (result) => {
                    setMenu(result);
                },
            )
    }, [])

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <AcUnitIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        กับข้าวกับปลา
                    </Typography>
                    <Button variant="h6" startIcon={<ShoppingCartIcon color='inherit' noWrap />}>
                    </Button>
                </Toolbar>
            </AppBar>
            <main>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" >โปรโมชั่น</Button>
                    <Button variant="secondary" >ของหวาน</Button>
                    <Button variant="secondary">ของคาว</Button>
                    <Button variant="secondary">เครื่องดื่ม</Button>
                    <Button variant="secondary">ของทานเล่น</Button>
                </ButtonGroup>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {menu.map(menu => (
                            <Grid item key={menu.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            pt: '56.25%',
                                        }}
                                        image={menu.image}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {menu.namemenu}
                                        </Typography>
                                        <Typography>
                                            {menu.detail}
                                        </Typography>
                                        <Typography>
                                            {menu.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Add to cart</Button>
                                        <Button size="small"></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
