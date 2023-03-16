import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Creatorloader = () => {
    return (
        <>
            <div className="creator_single">
                <div className='flx gap20'>
                    <div className="creator_img"><Skeleton height={45} width={45} circle={true} /></div>
                    <div className="creator_name">
                        <h2><Skeleton width={100} /></h2>
                        {<h3><Skeleton width={80} /></h3>}
                    </div>
                </div>
                <div className="follow">
                    <Skeleton width={100} height={40} />
                </div>
            </div>
        </>
    )
}

export default Creatorloader
