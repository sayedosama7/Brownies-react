import React from 'react'
import { useCart } from 'react-use-cart';
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Page() {
    const { addItem } = useCart();
    const products = [
        {
            "id": 1,
            "name": "فادج",
            "image": "images/products/gateax/فادج.png",
            "price": "40"
        },
        {
            "id": 2,
            "name": "لوز",
            "image": "images/products/yamesh/لوز.png",
            "price": "60 "
        },
        {
            "id": 3,
            "name": "باتون ساليه",
            "image": "images/products/bakery/باتون-سالية-2.png",
            "price": "15"
        },
        {
            "id": 4,
            "name": "بسيمة بندق",
            "image": "images/products/elmoled/بسيمه-بندق.png",
            "price": 40
        }
    ];

    return (
        <div>
            <Container className='text-center'>
                <Row>
                    <h2 className='title-center'>الأكثر مبيعا</h2>
                    {products.map((item) => (
                        <Col md='3'>
                            <Card>
                                <img class="img-fluid" alt="Sample" src={item.image} />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item.name}
                                    </CardTitle>
                                    <CardSubtitle className="my-3 text-muted" tag="h6">
                                        {item.price} ج.م.
                                    </CardSubtitle>
                                    <hr />

                                    <button onClick={() => addItem(item)} className='btn btn-danger btn-block'>شراء</button>

                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <NavLink to='/menu' className=' d-block text-center mt-4 text-brown'>للمزيد اضغط هنا</NavLink>
        </div>
    );
}

function MostSelling() {
    return (
        <div>
            <Page />
        </div>
    )
}
export default MostSelling