import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ComputerLayout from './ComputerLayout'

export default function Dashboard({userID}) {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return (
        isTabletOrMobile ? <div>Phone layout</div> : <ComputerLayout userID={userID} />
    )
}
