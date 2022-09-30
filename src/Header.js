import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{user}, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
        <div className="header__left">
            <SearchOutlinedIcon/>
            <input placeholder='Search for Artists, Songs or Albums' type='text'>
            </input>
        </div>
        <div className="header__right">
        <Avatar alt="Aman Rawat" src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header