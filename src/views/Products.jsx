/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import Card1 from 'components/Card/Card1.jsx'
import Modal from 'components/Modal/Modal.jsx'
import {
  thArray,
  tdArray,
  products,
  productItem,
} from 'variables/Variables.jsx';
import Image1 from '../assets/img/productImage/img-1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModal = () => {
    handleShow()
  }
  return (
    <div className='content'>
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card1

              context={
                <div className="justify-content-between top">
                  <span>Search for Product Here</span>
                  <Button bsStyle='primary' size='sm' onClick={handleModal}>Add Product</Button>
                </div>
              }
            />

            <Modal
              show={show}
              onHide={handleClose}
              onClick={handleClose}
              title='Add new Product'
            >
              hello
            </Modal>
          </Col>
          <Col md={12}>
            <Card
              title='All Product'
              category='Here is a subtitle for this table'
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      {productItem.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((prop, key) => (
                      <tr key={key}>
                        <td>{prop.id}</td>
                        <td>{prop.price}</td>
                        <td>{prop.name}</td>
                        <td>{prop.quality}</td>
                        <td>
                          <img
                            src={Image1}
                            alt=''
                            style={{
                              Width: '30px',
                              height: '30px',
                              objectFit: 'contain',
                            }}
                          />
                        </td>
                        <td>
                          <Button bsStyle='primary'>Edit</Button>
                        </td>
                        <td>
                          <Button bsStyle='danger'>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

