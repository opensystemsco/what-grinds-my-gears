import React, { useState } from 'react'
import { Navbar, Container, Dropdown,} from 'react-bootstrap'
import { v4 as uuid } from 'uuid';

import Avatar from './Avatar';
import UserName from './UserName';

export default function Header({userID, setUserID}) {

    const [existingIDs, setExistingIDs] = useState(JSON.parse(localStorage.getItem('wgmg-savedIDs')));
    const newID = uuid();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src="/logo512.png" width="30" height="30" className="d-inline-block align-top" />
                    What Grinds My Gears
                </Navbar.Brand>
            </Container>
            <Dropdown>
                <Dropdown.Toggle variant="light">
                    <Avatar seed={userID}/>
                    <span className="ms-1"><UserName seed={userID} /></span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        existingIDs ? existingIDs.map((id) => {
                            return (<Dropdown.Item key={id} onClick={() => setUserID(id)}><Avatar seed={id}/><span className="ms-1"><UserName seed={id} /></span></Dropdown.Item>)
                        }) : console.log('Waiting to get ID list')
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => {
                        setUserID(newID);
                        existingIDs.push(newID);
                        localStorage.setItem('wgmg-savedIDs', JSON.stringify(existingIDs));
                        }
                    }>
                        <Avatar seed={newID}/>
                        <span className="ms-1">New identity</span>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>           
        </Navbar>
    )
}
