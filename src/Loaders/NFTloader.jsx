import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const NFTloader = () => {
    return (
        <>
            <div className="product_box">
                <div className="">
                    <Skeleton height={180} />
                </div>
                <div className="flxspbt mt10">
                    <h2><Skeleton width={200} /></h2>
                </div>
                <div className="author">
                    <Skeleton width={40} circle={true} height={40} />
                </div>
            </div>
        </>
    )
}

export default NFTloader
