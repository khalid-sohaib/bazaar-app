import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink({path, data, children}) {
    
  return (
    <Link
        style={{ textDecoration: 'none', color:'#4B566B' }}
        to={path}
        state={ data }
        
    >
        {/* {console.log('data  ',data)} */}
        {children}
    </Link>

  )
}
