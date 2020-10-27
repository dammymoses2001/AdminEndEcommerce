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
                    <Form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
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
