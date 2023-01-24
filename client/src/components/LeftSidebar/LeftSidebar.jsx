import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globe.png'

const LeftSidebar = () => {
  return (
    <div className='Left-sidebar'>
      <nav className='side-nav'>
          <NavLink to='/' className='side-nav-links' activeClassName='active'> {/* NavLink ma activeclassname hoy che so wtle apde use kriye chie so active no use kri ne apde css ma use krisakye */}
            <p>Home</p> 
          </NavLink>
          <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links' activeClassName='active'>
              <img src={Globe} alt="globe" />
              <p style={{paddingLeft: "10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
              <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft: "40px"}}>
              <p>Users</p>
            </NavLink>
          </div>
      </nav>

    </div>
  )
}

export default LeftSidebar