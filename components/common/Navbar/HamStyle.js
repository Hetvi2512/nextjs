import React from 'react';
import { useRouter } from "next/router";

function HamStyle(props) {
  const router = useRouter();

    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>

            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/style',query:{key:'1'}},'/style', { shallow: true })}>
            → FASHION
            </div>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/style',query:{key:'2'}},'/style', { shallow: true })}>
            → SNEAKERS
            </div>
            <div className='ham-style-right-opt Biotif-Bold'onClick={()=>router.push({pathname:'/style',query:{key:'3'}},'/style', { shallow: true })}>
            → WATCHES
            </div>
            </div>
        </div>
    </div>
    );
}

export default HamStyle;