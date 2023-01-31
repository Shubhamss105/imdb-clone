import React, { useState } from 'react'
import { AppBar,Toolbar,styled,Box,Typography, InputBase} from '@mui/material'
import {Menu,BookmarkAdd,  ExpandMore} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import {logoURL} from '../constants/Constant.js';
import HeaderMenu from './HeaderMenu.jsx';



const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height:56px !important;
    padding: 0 115px !important;
    justify-content:space-between;
    &>*{
        padding:16px;
    }
    &>div {
        display:flex;
        align-items:center;
        cursor:pointer;
        &>p{
            font-size:14px;
            font-weight:600;
        }
    }
    &>p{
        font-size:14px;
        font-weight:600;
    }
`;

const InputSearchField=styled(InputBase)`
    background:#FFFFFF;
    height:30px;
    width:55%;
    border-radius:5%;
`;

const Logo=styled('img')({
    width:64,
    cursor:'pointer'
})

const Header = () => {

    const navigate=useNavigate();
    const [open,setOpen] = useState(null);

    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }

    const handleClose=()=>{
        setOpen(null);
    }
  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Logo src={logoURL} alt='' onClick={()=>navigate('/imdb')}/>
        <Box onClick={handleClick}>
            <Menu/>
            <HeaderMenu open={open} handleClose={handleClose}/>
            <Typography>Menu</Typography>
        </Box>
        <InputSearchField/>
        <Typography>IMDb <Box component='span'>Pro</Box> </Typography>
        <Box>
        <BookmarkAdd/>
        <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
            <Typography>EN</Typography>
            <ExpandMore/>
        </Box>
      </StyledToolBar>
    </AppBar>
  )
}

export default Header
