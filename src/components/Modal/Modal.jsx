import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'



export default function ModalComponent(prop) {
    return (
        <>
            <Modal show={prop.show} onHide={prop.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{prop.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {prop.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={prop.onHide}>
                        Close
          </Button>
                    <Button bsStyle='primary' size='sm' onClick={prop.button}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
