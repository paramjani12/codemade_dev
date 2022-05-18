import * as React from "react";
import './userhome.css';
import { useHistory } from "react-router-dom";

import AuthContext from "../contexts/authContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from "@mui/material";
import img1 from "../images/logo.svg";
import cplusplus from "../images/c++icon.svg";
import c from '../images/cicon.svg';
import java from '../images/javaicon.svg';
import python from '../images/pythonicon.svg';
import ruby from '../images/rubyicon.svg';
import perl from '../images/perlicon.svg';

const pages = [];
const settings = ['My Profile', 'Dashboard', 'Logout'];



const UserHomePage = ({ userName }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let str = userName;
  let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')

  const ctx = React.useContext(AuthContext);



  const history = useHistory();
  const handleStart = () => {
      history.push("/code");
  }
  return (
    <>
    <AppBar position="static" style={{backgroundColor:"#1D3557" , color:"#F1FAEE"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={img1} />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={img1} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar style={{backgroundColor:"#1976D2", color:"#F1FAEE", fontFamily:"Raleway", fontWeight:"800"}}>{acronym}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem key={settings[0]}>
                  <Typography textAlign="center">{settings[0]}</Typography>
                </MenuItem>
                <MenuItem key={settings[1]}>
                <Typography textAlign="center">{settings[1]}</Typography>
              </MenuItem>
              <MenuItem key={settings[2]} onClick={ctx.logout}>
                  <Typography textAlign="center">{settings[2]}</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <hr color="#F1FAEE"/>
    <div className="topComponent">
        <div className="firstline">
        <span>Hi {userName}, Welcome back to CodeMate. </span>
        <span><Button variant="contained" color="primary" style={{fontWeight:'bold'}} onClick={handleStart}>Start Coding</Button></span>
        </div>
        <div style={{paddingBottom:'20px'}}>
            <span style={{fontSize:'large'}}>Recent Codes:</span>
        </div>
        <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340 }}style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={python}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Programming in Python 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340 }}style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={cplusplus}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    C++ Program-1
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340  }} style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={cplusplus}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Bubble Sort
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340  }} style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={cplusplus}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Kadane Algorithm 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340  }} style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={cplusplus}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Maximum Circular Subarray Sum 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340  }} style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={java}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Binary to Decimal 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340  }} style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={python}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Programming in Python - 2 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
                <Card sx={{ maxWidth: 200 , height:340  }} style={{backgroundColor:'#F1FAEE', color:'#1D3557'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={python}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Programming in Python -3 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                    <Button size="small">Open</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            

        </Grid>
    </div>
    </>
  )
}

export default UserHomePage