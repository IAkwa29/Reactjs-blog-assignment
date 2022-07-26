import React from 'react'
import Posty from '../posty/Posty'

function Postest({Post}) {
  return (
    <div className='posts'>
        {Post.map(item =>(
            <Posty  post={item} key={item.id}/>
        ))}
        
    </div>
  )
}

export default Postest;