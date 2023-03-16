import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bidsloader from '../Loaders/Bidsloader';
import Bids from './Bids';
import Devider from './Devider';
import Mobilemenu from './Mobilemenu';
import Navbar from './Navbar';

const History = () => {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true);

    const getdata = () => {
        axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&query=3d%20reenders&per_page=30&order_by=latest&page=1`).then((Response) => {
            setdata(Response.data.results)
            setloading(false)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            getdata();
        }, 300);
        document.title='History | Cortex'

    }, [])

    return (
        <>
            <div className="flx flxcol">
            <Mobilemenu/>
                <div className="sml">
                    <Navbar />
                </div>
                <div className="bgc">
                    <div className="flxspbt">
                        <h2 className='heading'>History</h2>
                    </div>
                    <Devider />
                    <div className="bids">
                        {loading?<>
                        <Bidsloader/><Bidsloader/><Bidsloader/><Bidsloader/>    
                        </>:
                            data.map((e, i) => (
                                <Bids key={i} img={e.urls.small} descr={e.description} title={e.id} price={e.height / 1423} staus="3000" username={e.user.id + e.id} time={e.promoted_at === undefined ? e.updated_at : e.promoted_at} to='You' />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default History
