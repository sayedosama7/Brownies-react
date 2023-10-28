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
      "name": "مشمش",
      "image": "images/products/yamesh/مشمش.png",
      "price": "100 "
    },
    {
      "id": 2,
      "name": "بندق مقشر",
      "image": "images/products/yamesh/yamesh-2.jpg",
      "price": "180 "
    },
    {
      "id": 3,
      "name": "لوز",
      "image": "images/products/yamesh/لوز.png",
      "price": "60 "
    },
    {
      "id": 4,
      "name": "عين جمل",
      "image": "images/products/yamesh/yamesh-4.jpg",
      "price": "120 "
    },
    {
      "id": 5,
      "name": "قراصيا",
      "image": "images/products/yamesh/قراصيا.png",
      "price": "100 "
    },
    {
      "id": 6,
      "name": "بندق",
      "image": "images/products/yamesh/yamesh-3.jpg",
      "price": "150 "
    },
    {
      "id": 7,
      "name": "بندق محمص",
      "image": "images/products/yamesh/بندق-محمص.png",
      "price": "210 "
    },
    {
      "id": 8,
      "name": "بندق مقشر",
      "image": "images/products/yamesh/بندق-مقشر.png",
      "price": "190 "
    },
    {
      "id": 9,
      "name": "تين مجفف",
      "image": "images/products/yamesh/تين-مجفف.png",
      "price": "90 "
    },
    {
      "id": 10,
      "name": "زبيب",
      "image": "images/products/yamesh/زبيب.png",
      "price": "140 "
    },
    {
      "id": 11,
      "name": "سوداني مملح",
      "image": "images/products/yamesh/سوداني-مملح.png",
      "price": "150 "
    },
    {
      "id": 12,
      "name": "شيكولاته سوداني",
      "image": "images/products/yamesh/شيكولاته-سوداني.png",
      "price": "200 "
    },
    {
      "id": 13,
      "name": "فسدق محمص",
      "image": "images/products/yamesh/فسدق-محمص.png",
      "price": "100 "
    },
    {
      "id": 14,
      "name": "لوز",
      "image": "images/products/yamesh/لوز.png",
      "price": "60 "
    },
    {
      "id": 15,
      "name": "قراصيا",
      "image": "images/products/yamesh/قراصيا.png",
      "price": "100 "
    },
    {
      "id": 16,
      "name": "قمر الدين الاحلام",
      "image": "images/products/yamesh/قمر-الدين-الاحلام.png",
      "price": "70 "
    },
    {
      "id": 17,
      "name": "قمر الدين الزهره",
      "image": "images/products/yamesh/قمر-الدين-الزهره.png",
      "price": "90 "
    },
    {
      "id": 18,
      "name": "قمر الدين رولز",
      "image": "images/products/yamesh/قمر-الدين-رولز.png",
      "price": "80 "
    },
    {
      "id": 19,
      "name": "مكسرات",
      "image": "images/products/yamesh/yamesh-5.jpg",
      "price": "50 "
    },
    {
      "id": 20,
      "name": "مشمش",
      "image": "images/products/yamesh/مشمش.png",
      "price": "100 "
    },
    {
      "id": 21,
      "name": "عين جمل",
      "image": "images/products/yamesh/yamesh-1.jpeg",
      "price": "150 "
    }
  ]

  return (
    <div>
      <div className='pt-5'>

      </div>

      <Container className='pt-5 all-products'>
        <Row>
          <h2 className='title-center'>قسم الياميش و المكسرات</h2>

          {products.map((item) => (

            <Col md='4' className='text-center mb-4'>

              <Card className='box'>
                <div className='images'>
                  <img alt="Sample" className='bakery-img' src={item.image} />
                </div>
                <CardBody>

                  <CardTitle className='text-brown fw-bold' tag="h5">
                    {item.name}
                  </CardTitle>

                  <CardSubtitle className="my-2 text-muted" tag="h6">
                    {item.price} ج.م.
                  </CardSubtitle>

                  <button onClick={() => addItem(item)} className='btn px-5 mt-2'>buy</button>

                </CardBody>

              </Card>
            </Col>

          ))}
        </Row>
      </Container>
    </div>
  )
}
function Yamesh() {
  return (
    <CartProvider>
      <NavBar />
      <Page />
      <Footer />
      <ScrollToTop
        viewBox="0 0 24 24"
        svgPath="M12,21 C16,19.6666667 18,17.4411765 18,14.3235294 L18,12 L18,12 L6,12 L6,14.3235294 L6,14.3235294 C6,17.4411765 8,19.6666667 12,21 Z M7.5,7 L10.2747211,6.20722253 C10.7040227,6.08456495 11,5.69217895 11,5.24569859 L11,4 L13,4 L12.5575036,4.88499271 C12.3105144,5.3789712 12.5107387,5.97964425 13.0047172,6.22663349 C13.0699767,6.25926325 13.1386113,6.28465283 13.2093952,6.3023488 L16,7 C18.1421954,7.53554885 19.4700868,9.65673819 19.0450148,11.7991358 L19,12 L5,12 L4.882843,11.531372 C4.39057566,9.56230266 5.54842347,7.55759329 7.5,7 Z
        "
        smooth
        color='#663a2a'
        style={{ backgroundColor: '#fbc8c8', width: '60px' }} />
    </CartProvider>
  )
}

export default Yamesh