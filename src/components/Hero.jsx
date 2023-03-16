import React from 'react'
import Herobox from './Herobox'
import Herocover from './Herocover'

const Hero = () => {
    return (
        <>
            <div className="flx heroflx">
                <Herocover />

                <div className="heroboxes">
                    <Herobox title="Revenue" amount="5.00" cur="ETH" change='12.03' />
                    <Herobox title="Spending" amount="2.00" cur="ETH" change='8.1' />
                    <Herobox title="ROI" amount="+14.02" cur="%" change='-5.1' />
                    <Herobox title="Estimated" amount="7.00" cur="ETH" change='3.2' />
                </div>

            </div>
        </>
    )
}

export default Hero
