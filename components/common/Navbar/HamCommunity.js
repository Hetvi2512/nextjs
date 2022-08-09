import React from 'react';
import { useRouter } from 'next/router'

function HamCommunity(props) {
  const router = useRouter()

    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/community',query:{key:'1'}},'/community', { shallow: true })}>
                    → BUSINESS
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/community',query:{key:'2'}},'/community', { shallow: true })}>
                    → CONSCIOUS LIVING
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/community',query:{key:'3'}},'/community', { shallow: true })}>
                    → IDENTITY
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={()=>router.push({pathname:'/community',query:{key:'4'}},'/community', { shallow: true })}>
                    → VIEWPOINT
                </div>
            </div>
        </div>
    </div>
    );
}

export default HamCommunity;