import React from 'react';
import { useRouter } from 'next/router'

function HamCulture(props) {
  const router = useRouter()

    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push('/culture', undefined, { shallow: true })}>
            → AUTO
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push('/culture', undefined, { shallow: true })}>
            → ENTERTAINMENT
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push('/culture', undefined, { shallow: true })}>
            → GAMING & TECH
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push('/culture', undefined, { shallow: true })}>
            → LIVING
            </div>


            </div>
        </div>
    </div>
    );
}

export default HamCulture;