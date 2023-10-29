import React, { Component } from 'react'
import NavBar from './NavBar'
import ScrollToTop from 'react-scroll-to-top'
import Footer from './Footer'
import { CartProvider } from 'react-use-cart'
import { Col, Container, FormGroup, Row } from 'react-bootstrap'
import { Form, Link } from 'react-router-dom'
import { Input, Label } from 'reactstrap'

export class User extends Component {
  render() {
    return (
      <CartProvider>
        <NavBar />
        <div className='pt-5'></div>
        <Container className='pt-4 form-input'>
          <Row>
            <h2 className='title-center mb-2'>تسجيل الدخول</h2>
            <Col>
              <Form className='w-50 m-auto'>

                <FormGroup>
                  <Label className='text-brown' for="exampleEmail">اسم المستخدم </Label>
                  <Input id="exampleName" name="name" placeholder="" type="text" required />
                </FormGroup>

                <FormGroup>
                  <Label className='text-brown' for="exampleEmail">الرقم السري </Label>
                  <Input id="exampleEmail" name="password" placeholder="" type="password" required />
                </FormGroup>

                <Link to="/" className='btn btn-danger m-auto d-block w-25 mt-4'>
                  تسجيل دخول
                </Link>
                <Link to="/new-acc" className='btn btn-danger m-auto d-block w-25 mt-2'>
                    انشاء حساب جديد
                  </Link>
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

export default User