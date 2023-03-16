import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Herocover = () => {
    return (
        <>
            <div className="banner">
                <h2>Discover, Create and Sell Your Own NFT.</h2>

                <Stack spacing={2} direction="row">
                    <Link to='/market' ><Button className='herobtn' variant="contained">Discover</Button></Link>
                    <Button className='herobtn' variant="outlined">Create</Button>
                </Stack>

            </div>
        </>
    )
}

export default Herocover
