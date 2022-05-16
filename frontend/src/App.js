import * as React from 'react';
import './App.css';
import {} from '@mui/material';
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const ISLOGGED=true

const RenderToolBar = () => {
  if (ISLOGGED){
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{backgroundColor:"black"}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                style={{color:"#FFD700"}}
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography style={{color:"#FFD700"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Penguin Music
              </Typography>
              <Button style={{color:"#FFD700"}}>¡Hola!</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
  }
  else return <div></div>
}

function App() {
  return (
    <>
    <RenderToolBar />
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
