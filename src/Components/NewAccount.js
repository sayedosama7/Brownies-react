import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { CartProvider } from 'react-use-cart'
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { Form, Link } from 'react-router-dom'

function NewAccount() {
  return (
    <CartProvider>
      <NavBar />
      <div className='pt-5'></div>
      <Container className='pt-4 form-input'>
        <Row>
          <h2 className='title-center mb-2'>التسجيل</h2>
          <Col md="12">
            <Form className='w-50 m-auto'>

              <FormGroup>
                <Label className='text-brown' for="exampleEmail">الاسم </Label>
                <Input id="exampleName" name="name" placeholder="" type="text" required />
              </FormGroup>

              <FormGroup>
                <Label className='text-brown' for="exampleEmail">الايميل </Label>
                <Input id="exampleEmail" name="email" placeholder="" type="email" required />
              </FormGroup>

              <FormGroup>
                <Label className='text-brown' for="examplePassword">الرقم السري</Label>
                <Input id="examplePassword" name="password" placeholder="" type="password" required />
              </FormGroup>

              <FormGroup>
                <Label className='text-brown' for="examplePassword">تأكيد الرقم السري</Label>
                <Input id="examplePassword" name="password" placeholder="" type="password" required />
              </FormGroup>
              <Link to="/ths-reg" className='btn btn-danger m-auto d-block w-25 mt-4'>
                تسجيل
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </CartProvider>
  )
}

export default NewAccount