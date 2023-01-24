import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blackLogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>From Twitter Bootstrap to VP of Engineering at Patreon, a chat with Utkarsh...</p>
          </div>
          <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>Continuous delivery, meet continuous security</p>
          </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>Help us identify new roles for community members</p>
          </div>
          <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>Navigation and UI research starting soon</p>
          </div>
          <div className='right-sidebar-div-2'>
            <img src={blackLogo} alt="pen" width='18' />
            <p>2022 Community Moderator Election Results - now with two more mods!</p>
          </div>
        </div>
        <h4>Hot Meta Post</h4>
        <div className='right-sidebar-div-1'>
          <div className='right-sidebar-div-2'>
            <p>38</p>
            <p>Does Elon Musk have any grounds for legal action against people who track his plane?</p>
          </div>
          <div className='right-sidebar-div-2'>
            <p>3</p>
            <p>Am I allowed to take a liferaft onto a commerical flight?</p>
          </div>
          <div className='right-sidebar-div-2'>
            <p>44</p>
            <p>Is it worth to defragment XFS on SSD (many files)?</p>
          </div>
        </div>
    </div>
  )
}

export default Widget