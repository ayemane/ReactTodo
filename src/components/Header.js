import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    const headerStyle = {
        background: '#333',
        color: '#e4e4e4',
        textAlign: 'center',
        padding: '10px'
    }
  return (
    <div style={headerStyle}>
      <h4>My React 2019!</h4>
      <Link to='/'>Home</Link> | 
      <Link to='/about'>About</Link>
    </div>
  )
}