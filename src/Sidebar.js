import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
        <img className='sidebar__logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify logo" />
            <SidebarOption title="Home" Icon={HomeOutlinedIcon}/>
            <SidebarOption title="Search" Icon={SearchOutlinedIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon}/>
        <br />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist) => {
            return (<SidebarOption title={playlist.name} />)
            }
        )}
    </div>
    );
}

export default Sidebar;