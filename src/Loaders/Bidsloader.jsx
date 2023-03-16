import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Bidsloader = () => {
  return (
    <>
      <div className="bid_single flxalcenter">
      <div className="bids_img">
        <Skeleton width={100} height={100}/>
      </div>
        <div className="md">
          <h2 ><Skeleton width={300} height={40} /></h2>
          <h2 ><Skeleton width={300} height={40} /></h2>
        </div>
        <div className="lst">
          <h2 ><Skeleton width={100} height={40} /></h2>
          <h2 ><Skeleton width={100} height={40} /></h2>
        </div>
      </div>
    </>
  )
}

export default Bidsloader
