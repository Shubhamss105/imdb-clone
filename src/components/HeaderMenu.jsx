import React from 'react'
import {Menu,MenuItem} from '@mui/material'
import { Link } from 'react-router-dom';
import { routePath } from '../constants/route';


const HeaderMenu = ({open,handleClose}) => {

  return (
    <Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={`${routePath.categories}?category=popular`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>

        </Link>
        <Link to={`${routePath.categories}?category=toprated`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?category=upcoming`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
      </Menu>
  )
}

export default HeaderMenu
