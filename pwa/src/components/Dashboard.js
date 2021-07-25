import React from 'react'
import Sidebar from './Sidebar'

export default function Dashboard({userID}) {
    return (
        <div className='d-flex' style={{ height: '100vh' }}>
            <Sidebar userID={userID} />
        </div>

    )
}
