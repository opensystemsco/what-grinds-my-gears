import React, {useRef}  from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NewContactModal({ closeModal }) {
    
    const contactID = useRef();
    const contactAlias = useRef();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type='text' ref={contactID} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Alias</Form.Label>
                        <Form.Control type='text' ref={contactAlias} required/>
                    </Form.Group>
                    <Button type='submit'>Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
