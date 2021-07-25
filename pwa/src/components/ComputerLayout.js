import React from 'react'
import Sidebar from './Sidebar'

export default function ComputerLayout({userID}) {

    return (
        <div className='d-flex' style={{ height: '100vh' }}>
            <Sidebar userID={userID} />
        </div>
    )
}
