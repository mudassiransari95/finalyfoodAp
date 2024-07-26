import React from 'react'
import SidebarLeft from './../Sidebar';
import Home from './Home';



const Left = () => {
  return (
    <div className='flex'>
      <div className='sidebarrrr'>
      <SidebarLeft/>

      </div>
      <div className='rightHome'>

      <Home/>

    
 
      </div>
      
    </div>
  )
}

export default Left