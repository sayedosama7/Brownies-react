import React, { Component } from 'react'
import NavBar from './NavBar'
import ScrollToTop from 'react-scroll-to-top'
import Footer from './Footer'
import { CartProvider } from 'react-use-cart'
import { Form } from 'react-router-dom'
import { Input } from 'reactstrap'
import { Col, Container, Row } from 'react-bootstrap'

export class Search extends Component {
    render() {
        return (
            <CartProvider>
                <NavBar />
                <div className='pt-5'></div>
                <Container className='pt-4 form-input'>
                    <h2 className='title-center mb-3'>البحث</h2>
                    <Row>
                        <Col>
                            <Form className='w-50 m-auto'>
                                <Input id="exampleName" name="search" placeholder="اكتب هنا ما تبحث عنه" type="search" />
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <Footer />

                <ScrollToTop
                    smooth
                    color='#663a2a'
                    style={{ backgroundColor: '#fbc8c8', width: '60px' }}
                />
            </CartProvider>


        )
    }
}

export default Search