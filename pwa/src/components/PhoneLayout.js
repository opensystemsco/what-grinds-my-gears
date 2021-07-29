import React from 'react'

import Header from './Header.js'

export default function PhoneLayout({userID, setUserID}) {

    return (
        <Header userID={userID} setUserID={setUserID} />

    )
}
