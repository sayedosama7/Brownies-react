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
      "name": "apple pie",
      "image": "images/products/bakery/bakery-1.jpeg",
      "price": "10"
    },
    {
      "id": 2,
      "name": "danash",
      "image": "images/products/bakery/bakery-2.jpeg",
      "price": "35"
    },
    {
      "id": 3,
      "name": "mini cake",
      "image": "images/products/bakery/bakery-17.jpeg",
      "price": "30"
    },
    {
      "id": 4,
      "name": "creaze pie",
      "image": "images/products/bakery/bakery-4.jpeg",
      "price": "20"
    },
    {
      "id": 5,
      "name": "cookies",
      "image": "images/products/bakery/bakery-20.jpeg",
      "price": "15"
    },
    {
      "id": 6,
      "name": "fruit pie",
      "image": "images/products/bakery/bakery-6.jpeg",
      "price": "45"
    },
    {
      "id": 7,
      "name": "croaison",
      "image": "images/products/bakery/bakery-7.jpeg",
      "price": "30"
    },
    {
      "id": 8,
      "name": "crepe",
      "image": "images/products/bakery/bakery-8.jpeg",
      "price": "100"
    },
    {
      "id": 9,
      "name": "bread",
      "image": "images/products/bakery/bakery-9.jpeg",
      "price": "10"
    },
    {
      "id": 10,
      "name": "bread",
      "image": "images/products/bakery/bakery-10.png",
      "price": "65"
    },
    {
      "id": 11,
      "name": "bread",
      "image": "images/products/bakery/bakery-11.jpeg",
      "price": "44"
    },
    {
      "id": 12,
      "name": "danash",
      "image": "images/products/bakery/bakery-12.jpeg",
      "price": "35"
    },
    {
      "id": 13,
      "name": "danash",
      "image": "images/products/bakery/bakery-13.jpeg",
      "price": "45"
    },
    {
      "id": 14,
      "name": "bread",
      "image": "images/products/bakery/bakery-14.jpeg",
      "price": "70"
    },
    {
      "id": 15,
      "name": "fruit pie",
      "image": "images/products/bakery/bakery-6.jpeg",
      "price": "45"
    },

    {
      "id": 16,
      "name": "mafine",
      "image": "images/products/bakery/bakery-18.jpeg",
      "price": "20"
    },
    {
      "id": 17,
      "name": "sable",
      "image": "images/products/bakery/bakery-19.png",
      "price": "19"
    },
    {
      "id": 18,
      "name": "cookies",
      "image": "images/products/bakery/bakery-20.jpeg",
      "price": "15"
    },
    {
      "id": 19,
      "name": "دونتس ",
      "image": "images/products/bakery/دونتس.png",
      "price": "30"
    },
    {
      "id": 20,
      "name": "كيك",
      "image": "images/products/bakery/كيك.png",
      "price": "80"
    },
    {
      "id": 21,
      "name": "بقسماط",
      "image": "images/products/bakery/ساندوتش-جبنه-بيضاء-زيتون.png",
      "price": "15"
    },
    {
      "id": 22,
      "name": "بيتزا ايطالي",
      "image": "images/products/bakery/بيتزا-ايطالي.png",
      "price": "15"
    },
    {
      "id": 23,
      "name": "بغاشة",
      "image": "images/products/bakery/بغاشة.png",
      "price": "15"
    },
    {
      "id": 24,
      "name": "باتيه",
      "image": "images/products/bakery/باتيه.png",
      "price": "15"
    },
    {
      "id": 25,
      "name": "باتون ساليه",
      "image": "images/products/bakery/باتون-سالية-2.png",
      "price": "15"
    },
    {
      "id": 26,
      "name": "دونتس ",
      "image": "images/products/bakery/دونتس.png",
      "price": "30"
    },
    {
      "id": 27,
      "name": "كيك",
      "image": "images/products/bakery/كيك.png",
      "price": "80"
    }
  ];
  return (
    <div>
      <div className='pt-5'>

      </div>

      <Container className='pt-5 all-products'>
        <h2 className='title-center'>قسم المخبوزات</h2>
        <Row>

          {products.map((item) => (

            <Col md='4' className='text-center mb-4'>

              <Card className='box'>
                <div className='images'>
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
function Bakery() {
  return (
    <CartProvider>
      <NavBar />
      <Page />
      <Footer />
      <ScrollToTop
        viewBox="0 0 15 15"
        svgPath="M5.294,4.382,6,9.5a.979.979,0,0,0,1,1H8a.979.979,0,0,0,1-1l.706-5.118C9.706,3,7.5,3,7.5,3S5.291,3,5.294,4.382ZM3.5,5C2,5,2,6,2,6l1,4H4.5a.793.793,0,0,0,.794-.765L4.5,5Zm-2,2.5a1.533,1.533,0,0,0-1.059.412A1.366,1.366,0,0,0,0,8.794V11H.882A1.02,1.02,0,0,0,2,10ZM11.5,5C13,5,13,6,13,6l-1,4H10.5a.793.793,0,0,1-.794-.765L10.5,5Zm2,2.5a1.533,1.533,0,0,1,1.059.412A1.366,1.366,0,0,1,15,8.794V11h-.882A1.02,1.02,0,0,1,13,10Z
        "
        smooth
        color='#663a2a'
        style={{ backgroundColor: '#fbc8c8', width: '60px' }}
      />
    </CartProvider>
  )
}

export default Bakery