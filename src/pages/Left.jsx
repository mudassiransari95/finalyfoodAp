import React from 'react'
import SidebarLeft from './../Sidebar';
import Home from './Home';
import Set from '../sidebar/Set';
import ManageStoreCategory from './ManageStoreCategory';

const Left = () => {
  return (
    <div className='flex'>
      <div className='sidebarrrr'>
      <SidebarLeft/>

      </div>
      <div className='rightHome'>

      <Home/>

    
    <Set/>
      </div>
      <div className=''>
  {/* <Sitting/> */}
    {/* <ManageStoreCategory/> */}
      </div >
    </div>
  )
}

export default Left