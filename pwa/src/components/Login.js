import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import {v4 as uuid } from 'uuid';

export default function Login({ onIDSubmit }) {
    const userID = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onIDSubmit(userID.current.value);
    }

    function createNewID() {
        onIDSubmit(uuid());
    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type='text' ref={userID}></Form.Control>
                </Form.Group>
                <Button type='submit' className='mr-2'>Login</Button>
                <Button onClick={createNewID} variant='secondary'>Signup</Button>
            </Form>
        </Container>
    );
}
