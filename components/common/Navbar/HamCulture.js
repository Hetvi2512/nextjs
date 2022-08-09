import React from 'react';
import { useRouter } from 'next/router'

function HamCulture(props) {
  const router = useRouter()

    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/culture',query:{key:'1'}},'/culture', { shallow: true })}>
            → AUTO
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/culture',query:{key:'2'}},'/culture', { shallow: true })}>
            → ENTERTAINMENT
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/culture',query:{key:'3'}},'/culture', { shallow: true })}>
            → GAMING & TECH
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/culture',query:{key:'4'}},'/culture', { shallow: true })}>
            → LIVING
            </div>


            </div>
        </div>
    </div>
    );
}

export default HamCulture;