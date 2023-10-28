import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Col, Container, Row } from 'reactstrap'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

const ContineuShiping = () => {
    return (
        <CartProvider>
            <NavBar />
            <div className='pt-5 register'>
                <Container className='pt-4 continue'>
                    <Row>
                        <h2 className='title-center'>تاكيد اتمام عملية الشراء</h2>
                        <Col md="12">
                            <Form className='w-50 m-auto'>

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label>الاسم بالكامل</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label> رقم الهاتف</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label> المحافظة </Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label> اسم الشارع </Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="" />
                                </Form.Group>

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label> رقم المبني </Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="" />
                                </Form.Group>

                                <Link to="/thanks" className='btn btn-danger d-block m-auto w-25 mt-4'>تاكيد</Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />

        </CartProvider>
    )
}

export default ContineuShiping