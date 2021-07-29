import React from 'react'

import Header from './Header'

export default function Sidebar({ userID, setUserID }) {

    return (
        <div className='d-flex flex-column' style={{ width: '35%' }}>
            <Header userID={userID} setUserID={setUserID} />
            <div className='p-2 border-top border-right small'>
                Your ID: <span className='text-muted'>{userID}</span>
            </div>
        </div>
    )
}