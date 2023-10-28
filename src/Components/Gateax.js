import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap'
import ScrollToTop from 'react-scroll-to-top'
import { CartProvider, useCart } from 'react-use-cart'

function Page() {
  const {addItem} = useCart();
  const products = [
    {
      "id": 1,
      "name": "اكلير-شوكلت",
      "image": "images/products/gateax/اكلير-شوكلت.png",
      "price": "50"
    },
    {
      "id": 2,
      "name": "ايس-كريم-كساتا",
      "image": "images/products/gateax/ايس-كريم-كساتا.png",
      "price": "20"
    },
    {
      "id": 3,
      "name": "تشيز-كيك-اوريو",
      "image": "images/products/gateax/تشيز-كيك-اوريو.png",
      "price": "40"
    },
    {
      "id": 4,
      "name": "جاتو-بلاك-فورست",
      "image": "images/products/gateax/جاتو-بلاك-فورست.png",
      "price": "20"
    },
    {
      "id": 5,
      "name": "جاتو-ميلفيه-شوكلت",
      "image": "images/products/gateax/جاتو-ميلفيه-شوكلت.png",
      "price": "30"
    },
    {
      "id": 6,
      "name": "جاتو-ميلفيه-مربي",
      "image": "images/products/gateax/جاتو-ميلفيه-مربي.png",
      "price": "30"
    },
    {
      "id": 7,
      "name": "سويسرول-شوكلت",
      "image": "images/products/gateax/سويسرول-شوكلت.png",
      "price": "10"
    },
    {
      "id": 8,
      "name": "سويسرول-فانيليا",
      "image": "images/products/gateax/سويسرول-فانيليا.png",
      "price": "50"
    },
    {
      "id": 9,
      "name": "فادج",
      "image": "images/products/gateax/فادج.png",
      "price": "40"
    },
    {
      "id": 10,
      "name": "كب-كيك-سنيكرز",
      "image": "images/products/gateax/كب-كيك-سنيكرز.png",
      "price": "30"
    },
    {
      "id": 11,
      "name": "كونو-كيت-كات",
      "image": "images/products/gateax/كونو-كيت-كات.png",
      "price": "20"
    },
    {
      "id": 12,
      "name": "موس-شوكلت",
      "image": "images/products/gateax/موس-شوكلت.png",
      "price": "10"
    }, {
      "id": 13,
      "name": "cupcake",
      "image": "images/products/gateax/gateax-1.jpeg",
      "price": "20"
    },
    {
      "id": 14,
      "name": "gateax",
      "image": "images/products/gateax/gateax-2.jpeg",
      "price": "50"
    },
    {
      "id": 15,
      "name": "swiss roll",
      "image": "images/products/gateax/gateax-3.jpeg",
      "price": "30"
    },
    {
      "id": 16,
      "name": "pie",
      "image": "images/products/gateax/gateax-4.jpeg",
      "price": "40"
    },
    {
      "id": 17,
      "name": "cake",
      "image": "images/products/gateax/gateax-5.jpeg",
      "price": "30"
    },
    {
      "id": 18,
      "name": "fadje cake",
      "image": "images/products/gateax/gateax-6.jpeg",
      "price": "40"
    },
    {
      "id": 19,
      "name": "mini tart",
      "image": "images/products/gateax/gateax-7.jpeg",
      "price": "50"
    },
    {
      "id": 20,
      "name": "tart",
      "image": "images/products/gateax/gateax-8.jpeg",
      "price": "30"
    },
    {
      "id": 21,
      "name": "pie",
      "image": "images/products/gateax/gateax-4.jpeg",
      "price": "40"
    }
  ];
  return (
    <div>
            <div className='pt-5'></div>
      <Container className='pt-4 all-products'>
        <Row>
          <h2 className='title-center'>قسم الغربي</h2>

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
function Gateax() {
  return (
    <CartProvider>
      <NavBar />
      <Page />
      <Footer />
      <ScrollToTop
        viewBox="0 0 269.91 269.911"
        svgPath="M269.196,121.554c-13.5-25.9-41.1-41.7-66.5-54.1c-25-12.1-38.3-10.4-57.4,0.9c-1.8-2.8-3.899-5.3-6.6-7.1
          c-4.6-3-10.1-3.2-15.4-2c-0.3-2.3-0.8-4.5-1.3-6.8c-2.6-15.1-12-27.9-24.4-37.6c-5.4-4.3-13,3.3-7.6,7.6
          c13.2,10.3,21.3,22.6,21.9,39c-5.7,1.3-10.9,4.6-14.3,10.5c-4.4,7.6-6.7,15.3-4.3,22.7c-30.5,11.1-58.2,28.8-86.4,44.799
          c-2.4,1.4-3,4-2.2,6.301c-7.7,31.199-3.8,62.399-3,94.3c0.1,3.5,2.6,5.6,5.9,5.899c44.3,4.9,88.6,6.4,133.2,7.101
          c29.7,0.399,62.2,6,91.601,1.6c10.6-1.6,15.6-12,18.899-20.7c12.301-31.899,2.4-69.199,15-101.899c0.301-0.8,0.4-1.6,0.4-2.3
          C269.597,128.354,270.796,124.654,269.196,121.554z M96.596,101.154c0.3,0.5,0.6,0.9,1,1.4c13.9,16.2,45.2,10.3,51.2-10
          c1-3.5,1.2-7.4,0.801-11.3c23.1-12.4,39.399-7.3,65.399,6.9c12.9,7,24.3,16,34.9,26c10.7,10.1-32.2,15.1-33.5,15.4
          c-61.101,11.8-124.701,10.1-186.9,9.5C51.896,126.454,74.496,114.154,96.596,101.154z M218.296,243.454
          c-14.5,0.2-29.3-1.8-43.699-2.1c-44.701-1.1-89.301-0.8-133.901-3.6c-19.8-1.4-27.9-14.7-30.8-31.801
          c41.1,13,92.2,16.7,135.3,17.601c31.5,0.7,62.9,3.7,94.1,5.1C236.396,237.154,230.496,243.254,218.296,243.454z M244.597,173.454
          c-0.7-0.699-1.601-1.199-2.7-1.5c-5.601-2.8-12.9-3.199-18.601-2.1c-0.5,0.1-0.8,0.3-1.199,0.5c-32.2-4.2-73.9,4.8-101.801,3.1
          c-16.1-1-56.9-8.899-85.9-6.1c-0.6-0.5-1.2-0.9-2-1.1c-6.8-2-13.9-2.301-21-2.301c-0.8,0-1.5,0.2-2.1,0.4
          c0.3-5.2,0.7-10.3,0.9-14.9c81.2,0.2,162.6,2.801,242-15.899C247.896,146.554,245.896,159.954,244.597,173.454z
        "
        smooth
        color='#663a2a'
        style={{ backgroundColor: '#fbc8c8', width: '60px' }}
      />
    </CartProvider>
  )
}
export default Gateax