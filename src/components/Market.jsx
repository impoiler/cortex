import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NFTloader from '../Loaders/NFTloader';
import Devider from './Devider';
import Mobilemenu from './Mobilemenu';
import Navbar from './Navbar';
import NFTSingle from './NFTSingle';

const Market = () => {

    const [data, setdata] = useState([])
    const [count, setcount] = useState(2)
    const [loading, setloading] = useState(true);


    const getdata = () => {
        axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&query=3d%20reenders&per_page=30&order_by=latest&page=${count}`).then((Response) => {
            setdata(Response.data.results)
            setloading(false)
        })
    }

    useEffect(() => {
        document.title = 'Market | Cortex'
        getdata()
    })

    return (
        <>
            <div className="flx flxcol">
            <Mobilemenu/>
                <div className="sml">
                    <Navbar />
                </div>
                <div className="bgc">
                    <div className="flxspbt">
                        <h2 className='heading'>Market</h2>
                        <ul className='catag'>
                            <Button >
                                <li>
                                    Art
                                </li></Button>
                            <Button > <li>
                                Music
                            </li></Button>
                            <Button > <li>
                                Collectibles
                            </li></Button>
                            <Button > <li>
                                Utility
                            </li></Button>
                        </ul>
                    </div>
                    <Devider />
                    <div className="product_container marketpage">
                        {
                            loading ? <><NFTloader /><NFTloader /><NFTloader /></> :
                                data.map((e, i) => (
                                    <NFTSingle nftimg={e.urls.regular} name={e.id} Key={i} imgurl={e.user.profile_image === undefined ? null : e.user.profile_image.medium} price={e.user.total_photos / 15} likes={e.likes} username={e.user.username} />
                                ))
                        }
                        <Button className='loadmore' onClick={() => { setcount(count + 1); getdata(); setloading(true) }} variant="contained">Load More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Market
