import React from 'react';
import { useRouter } from 'next/router'

function HamCommunity(props) {
  const router = useRouter()

    return (
        <div className='ham-2'>
        <div className='ham-style-right'>
            <div className='ham-center'>
            <div className='ham-style-right-opt Biotif-Bold' onClick={() => router.push('/community', undefined, { shallow: true })}>
                    → BUSINESS
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={() => router.push('/community', undefined, { shallow: true })}>
                    → CONSCIOUS LIVING
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={() => router.push('/community', undefined, { shallow: true })}>
                    → IDENTITY
                </div>
                <div className='ham-style-right-opt Biotif-Bold' onClick={() => router.push('/community', undefined, { shallow: true })}>
                    → VIEWPOINT
                </div>
            </div>
        </div>
    </div>
    );
}

export default HamCommunity;