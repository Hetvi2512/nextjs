import React from 'react';
import { useRouter } from 'next/router'

function HamSelf(props) {
  const router = useRouter()

    return (
       
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push('/self', undefined, { shallow: true })}>
            → BEAUTY & GROOMING
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push('/self', undefined, { shallow: true })}>
            → HEALTH & WELLNESS
            </div>
            </div>
        </div>
    </div>
    );
}

export default HamSelf;