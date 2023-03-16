import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const Profileloader = () => {
    return (
        <>
            <div className="userinfo">
                <div className="userbanner">
                    <div>
                        <Skeleton height={350} />
                    </div>
                </div>
                <div className="user_profile">
                    <div className="profile_photo">
                        <Skeleton height={150} width={150} />
                    </div>
                    <div className="user_details">
                        <h2><Skeleton /></h2>
                        <h3><Skeleton height={30} /></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profileloader
