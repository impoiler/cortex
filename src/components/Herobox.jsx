import React from 'react'

const Herobox = (props) => {


    return (
        <>
            <div className="box">
                <h4>{props.title}</h4>
                <div className="spnd">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8565 16.3642L11.9985 16.5047L18.4964 12.6947L11.9985 2L11.8565 2.47852V16.3642Z" fill="#2F84C0" />
                        <path d="M11.998 16.5047V2L5.5 12.6947L11.998 16.5047Z" fill="#50B4FC" />
                        <path d="M11.9181 22.7684L11.998 23.0001L18.4999 13.9172L11.9981 17.7253L11.9181 17.822L11.9181 22.7684Z" fill="#2F84C0" />
                        <path d="M5.5 13.9171L11.998 23V17.7252L5.5 13.9171Z" fill="#50B4FC" />
                        <path d="M11.9975 9.76505V16.5046L18.4953 12.6947L11.9975 9.76505Z" fill="#23618D" />
                        <path d="M11.9979 9.76505L5.5 12.6947L11.9979 16.5046V9.76505Z" fill="#409ADA" />
                    </svg>
                    {props.amount} <span>{props.cur}</span>
                </div>
                <div className="changes">
                    {
                        props.change > 0 ? <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1V13M1 6L6 1L1 6ZM6 1L11 6L6 1Z" stroke="#36BC4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            : <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 13V1M11 8L6 13L11 8ZM6 13L1 8L6 13Z" stroke="#F7501C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                    }
                    <span>{props.change} %</span>
                </div>
            </div>
        </>
    )
}

export default Herobox
