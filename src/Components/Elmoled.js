/* eslint-disable jsx-a11y/alt-text */
import { CartProvider, useCart } from "react-use-cart";
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from "reactstrap";
import Navbar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      "id": 1,
      "name": "برازق",
      "image": "images/products/elmoled/برازق.png",
      "price": 30
    },
    {
      "id": 2,
      "name": "بسيمة بندق",
      "image": "images/products/elmoled/بسيمه-بندق.png",
      "price": 40
    },
    {
      "id": 3,
      "name": "بسيمه ساده",
      "image": "images/products/elmoled/بسيمه-ساده.png",
      "price": 30
    },
    {
      "id": 4,
      "name": "جوزهند فسدق",
      "image": "images/products/elmoled/جوزهند-فسدق.png",
      "price": 50
    },
    {
      "id": 5,
      "name": "قشطه بندق",
      "image": "images/products/elmoled/قشطه-بندق.png",
      "price": 50
    },
    {
      "id": 6,
      "name": "جيلي فواكة",
      "image": "images/products/elmoled/جيلي-فواكة.png",
      "price": 90
    },
    {
      "id": 7,
      "name": "حمام",
      "image": "images/products/elmoled/حمام.png",
      "price": 100
    },
    {
      "id": 8,
      "name": "حمصيه",
      "image": "images/products/elmoled/حمصيه.png",
      "price": 80
    },
    {
      "id": 9,
      "name": "دومية بندق",
      "image": "images/products/elmoled/دومية-بندق.png",
      "price": 90
    },
    {
      "id": 10,
      "name": "سمسميه",
      "image": "images/products/elmoled/سمسميه.png",
      "price": 120
    },
    {
      "id": 11,
      "name": "شكلمه شوكلت",
      "image": "images/products/elmoled/شكلمه-شوكلت.png",
      "price": 90
    },
    {
      "id": 12,
      "name": "شكلمه",
      "image": "images/products/elmoled/شكلمه.png",
      "price": 90
    },
    {
      "id": 13,
      "name": "فوليه",
      "image": "images/products/elmoled/فوليه.png",
      "price": 100
    },
    {
      "id": 14,
      "name": "ملبن عين جمل",
      "image": "images/products/elmoled/ملبن-عين-جمل.png",
      "price": 90
    },
    {
      "id": 15,
      "name": "قرص حمصيه",
      "image": "images/products/elmoled/قرص-حمصيه.png",
      "price": 50
    },
    {
      "id": 16,
      "name": "قرص علب مكسرات",
      "image": "images/products/elmoled/قرص-علب-مكسرات.png",
      "price": 320
    },
    {
      "id": 17,
      "name": "قرص فسدقية",
      "image": "images/products/elmoled/قرص-فسدقية.png",
      "price": 120
    },
    {
      "id": 18,
      "name": "قرص كاجو",
      "image": "images/products/elmoled/قرص-كاجو.png",
      "price": 100
    },
    {
      "id": 19,
      "name": "قرص لوزية",
      "image": "images/products/elmoled/قرص-لوزية.png",
      "price": 200
    },
    {
      "id": 20,
      "name": "قرص ميني حمصيه",
      "image": "images/products/elmoled/قرص-ميني-حمصيه.png",
      "price": 60
    },
    {
      "id": 20,
      "name": "قشطه بندق",
      "image": "images/products/elmoled/قشطه-بندق.png",
      "price": 50
    }
  ];

  return (
    <div>
      <Container className="all-products pt-4">
        <h2 className='title-center'>قسم حلاوة المولد</h2>
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
  );
}

function Elmoled() {
  return (
    <CartProvider>
      <Navbar />
      <div className="pt-5"></div>
      <Page />
      <Footer />
      <ScrollToTop
        smooth
        color='#663a2a'
        style={{ backgroundColor: '#fbc8c8', width: '60px' }}
      />
    </CartProvider>
  );
}
export default Elmoled;


// {/* <Col md="4" key={ahmed.id} className="text-center mb-4">
// <img
//   src={ahmed.image}
//   className="img-fluid"
//   style={{ height: "350px" }}
// ></img>
// <h2>{ahmed.name}</h2>
// <h5>{ahmed.price} ج.م. </h5>
// <button
//   className="btn btn-primary"
//   onClick={() => addItem(ahmed)}
// >
//   Add to cart
// </button>
// </Col> */}