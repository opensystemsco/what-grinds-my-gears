import React, { useEffect, useState }  from 'react';
import { v4 as uuid } from 'uuid';
import { useMediaQuery } from 'react-responsive'
import { Container, Row, Col } from 'react-bootstrap';

import ComputerLayout from './ComputerLayout'
import PhoneLayout from './PhoneLayout'

export default function App() {
  const [userID, setUserID] = useState(() => JSON.parse(localStorage.getItem('wgmg-userID')));
  const [screen, setScreen] = useState('privateMessages');
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

  useEffect(() => {
    if(!userID){
      const newID = uuid();
      localStorage.setItem('wgmg-userID', JSON.stringify(newID));
      setUserID(newID);
      
      // let existingIDs = JSON.parse(localStorage.getItem('wgmg-savedIDs'));
      // if(!existingIDs) {
      //   existingIDs = [];
      //   existingIDs[0] = newID;
      // }
      // else{
      //   existingIDs.push(newID);
      // }

      let existingIDs = [];
      existingIDs[0] = newID;

      localStorage.setItem('wgmg-savedIDs', JSON.stringify(existingIDs));
    }

    setScreen('privateMessages');
  }, [userID])

  return (
    <Container className='m-0 p-0'>
      <Row style={{ height: '100vh' }}>
        {userID ? 
        <Col style={{ width: '100vw' }}>
          <Row>
            {isTabletOrMobile ? <PhoneLayout userID={userID} setUserID={setUserID} /> : <ComputerLayout userID={userID} setUserID={setUserID} />}
          </Row>
          <Row>
            {() => {
                switch (screen) {
                  case 'privateMessages':
                      
                    break;
                
                  default:
                    break;
                }
              }
            }  
          </Row>          
        </Col> : 
        <Col>
          <span>Generating first User ID</span>
        </Col>
        }
      </Row>
    </Container>
  );
}