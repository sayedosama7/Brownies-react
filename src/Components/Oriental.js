import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap'
import ScrollToTop from 'react-scroll-to-top'
import { CartProvider, useCart } from 'react-use-cart'

function Page() {
  const { addItem } = useCart();
  const products = [
    {
      "id": 1,
      "name": "جلاش مكسرات",
      "image": "images/products/oriental/oriental-1.jpg",
      "price": "20 "
    },
    {
      "id": 2,
      "name": "كنافة فسدق بورمة",
      "image": "images/products/oriental/oriental-2.jpg",
      "price": "30 "
    },
    {
      "id": 3,
      "name": "جلاش اساور",
      "image": "images/products/oriental/oriental-3.jpg",
      "price": "50 "
    },
    {
      "id": 4,
      "name": "كنافة عثمانلي فسدق",
      "image": "images/products/oriental/oriental-4.jpg",
      "price": ""
    },
    {
      "id": 5,
      "name": "رموش الست",
      "image": "images/products/oriental/oriental-5.jpg",
      "price": "30 "
    },
    {
      "id": 6,
      "name": "زلابيا",
      "image": "images/products/oriental/oriental-6.jpg",
      "price": "25 "
    },
    {
      "id": 7,
      "name": "جلاش",
      "image": "images/products/oriental/oriental-7.jpg",
      "price": "30 "
    },
    {
      "id": 8,
      "name": "كنافة اساور",
      "image": "images/products/oriental/oriental-8.jpg",
      "price": "55 "
    },
    {
      "id": 9,
      "name": "جلاش بقلاوه",
      "image": "images/products/oriental/oriental-9.jpg",
      "price": "90 "
    },
    {
      "id": 10,
      "name": "بسبوسه مكسرات",
      "image": "images/products/oriental/oriental-10.jpg",
      "price": "110 "
    },
    {
      "id": 11,
      "name": "شرقي",
      "image": "images/products/oriental/oriental-11.jpg",
      "price": "70 "
    },
    {
      "id": 12,
      "name": "كنافه",
      "image": "images/products/oriental/oriental-12.jpg",
      "price": "45 "
    },
    {
      "id": 13,
      "name": "بسيمة",
      "image": "images/products/oriental/oriental-13.jpg",
      "price": "15 "
    },
    {
      "id": 14,
      "name": "جلاش ",
      "image": "images/products/oriental/oriental-14.jpg",
      "price": "30 "
    },
    {
      "id": 15,
      "name": "جلاش",
      "image": "images/products/oriental/oriental-15.jpg",
      "price": "20 "
    },
    {
      "id": 16,
      "name": "كنافة فسدق بورمة",
      "image": "images/products/oriental/oriental-16.jpg",
      "price": "10 "
    },
    {
      "id": 17,
      "name": "كنافة قشطة",
      "image": "images/products/oriental/oriental-17.jpg",
      "price": "10 "
    },
    {
      "id": 18,
      "name": "كنافة نابلسية",
      "image": "images/products/oriental/oriental-18.jpg",
      "price": "50 "
    },
    {
      "id": 19,
      "name": "شرقي",
      "image": "images/products/oriental/oriental-19.jpg",
      "price": "20 "
    },
    {
      "id": 20,
      "name": "كنافة اساور",
      "image": "images/products/oriental/oriental-20.jpg",
      "price": "25 "
    },
    {
      "id": 21,
      "name": "جلاش اساور",
      "image": "images/products/oriental/oriental-3.jpg",
      "price": "50 "
    }
  ]
  return (
    <div>
      <NavBar />
      <div className='pt-5'>

      </div>

      <Container className='pt-5 all-products'>
        <Row>
          <h2 className='title-center'>قسم  الشرقي</h2>

          {products.map((item) => (

            <Col md='4' className='text-center mb-4 wow fadeInUp' data-wow-delay=".2s">

              <Card className='box'>
                <div className='images wow fadeInUp' data-wow-delay=".4s">
                  <img alt="Sample" src={item.image} />
                </div>
                <CardBody>

                  <CardTitle className='text-brown fw-bold' tag="h5">
                    {item.name}
                  </CardTitle>

                  <CardSubtitle className="my-2 text-muted" tag="h6">
                    {item.price} ج.م.
                  </CardSubtitle>

                  <button onClick={() => addItem(item)} className='btn px-5 mt-2'>شراء</button>

                </CardBody>

              </Card>
            </Col>

          ))}
        </Row>
      </Container>
    </div>
  )
}
function Oriental() {
  return (
    <CartProvider>
      <NavBar />
      <Page />
      <Footer />
      <ScrollToTop
        smooth
        color='#663a2a'
        style={{ backgroundColor: '#fbc8c8', width: '60px' }} 
        className='animate__animated animate__flash animate__infinite	infinite animate__slower'
        />
    </CartProvider>
  )
}

export default Oriental