import React from 'react'
import Sidebar from './Sidebar'

export default function ComputerLayout({userID, setUserID}) {

    return (
        <div className='d-flex' style={{ height: '100vh' }}>
            <Sidebar userID={userID} setUserID={setUserID} />
        </div>
    )
}
