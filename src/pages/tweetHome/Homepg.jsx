import React from 'react'
import "./homepg.css"

import Header from '../../components/header/Header';
import Postest from '../../components/postest/Postest';


function Homepg({tweets}) {
   
    return (
        <div>
            <Header />
            <div className='posts'>
                <Postest Post={tweets} />                
            </div>

        </div>
    )
}

export default Homepg;